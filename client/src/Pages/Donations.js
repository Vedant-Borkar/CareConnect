import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./FireBaseAuth"; // Ensure you have the correct path to your Firebase config

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
      if (error.type === 'card_error' && error.code === 'card_declined' && error.decline_code === 'card_not_supported') {
        setMessage("Your card is not supported. Please try another payment method.");
      } else {
        console.error(error);
        setMessage(error.message);
      }
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

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">Make a Donation</h3>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700 text-sm font-medium mb-2">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="block w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="card-element" className="block text-gray-700 text-sm font-medium mb-2">
          Card Details:
        </label>
        <CardElement
          id="card-element"
          className="p-3 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Donate
      </button>
      {message && <p className="mt-4 text-center text-red-600">{message}</p>}
    </form>
  );
};

export default DonationForm;