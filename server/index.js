//server.js
require('dotenv').config()

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const stripe = require("stripe")('<API KEY>');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

const calculateTotalOrderAmount = (items) => {
	return items[0].amount * 100;
};

app.post("/create-payment-intent", async (req, res) => {
	const { items } = req.body;

	const paymentIntent = await stripe.paymentIntents.create({
		amount: calculateTotalOrderAmount(items),
		currency: "usd",
		description: "This is for GFG Stripe API Demo",
		automatic_payment_methods: {
			enabled: true,
		},
	});

	res.send({
		clientSecret: paymentIntent.client_secret,
	});
});

app.listen(PORT, () => {
	console.log(`Server started on PORT ${PORT}`);
});
