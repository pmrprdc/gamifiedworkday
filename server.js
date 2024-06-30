import express from 'express';
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51PNa9yCSerJ3PVzBAneatmqTfBHA1zoVU2OlIy3zUdf3WpcBgrSQoWWpqkHh4j9jn9mBR6h4EcaDYidMuQP5lqkD00FnnookkN', {
  apiVersion: '2022-11-15',
});

const app = express();

app.use(express.json());

// Basic GET route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Endpoint to handle Stripe webhooks
app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const endpointSecret = 'whsec_...'; // Replace with your endpoint secret
  let event = request.body;

  if (endpointSecret) {
    const signature = request.headers['stripe-signature'];

    try {
      event = stripe.webhooks.constructEvent(
        request.body,
        signature,
        endpointSecret
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return response.sendStatus(400);
    }
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      break;
    default:
      console.log(`Unhandled event type ${event.type}.`);
  }

  response.send();
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
