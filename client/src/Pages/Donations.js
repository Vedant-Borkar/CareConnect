import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./FireBaseAuth"; // Ensure you have the correct path to your Firebase config

const stripePromise = loadStripe("your-publishable-key-here");

const DonationForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error(error);
      setMessage(error.message);
    } else {
      try {
        // Add donation details to Firestore
        await addDoc(collection(db, "donations"), {
          amount,
          paymentMethodId: paymentMethod.id,
          created: new Date(),
        });

        setMessage("Donation successful!");
      } catch (err) {
        console.error("Error adding donation to Firestore:", err);
        setMessage("Donation failed. Please try again.");
      }
    }
  };

  const handleDonate = ()=>{
    alert(`Thank you for your donation of ${amount}!`);

    setAmount(0); 
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-8">Make a Donation</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card-element">
          Card Details:
        </label>
        <CardElement
          id="card-element"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        disabled={!stripe}
        onClick={handleDonate}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Donate
      </button>
      {/* {message && <p className="mt-4 text-center text-red-500">{message}</p>} */}
    </form>
  );
};

const Donation = () => {
  return (
    <Elements stripe={stripePromise}>
      <DonationForm />
    </Elements>
  );
};

export default Donation;
