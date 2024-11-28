const express = require('express');
const app = express();
// Middleware to parse JSON and urlencoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 7865;


app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
})

app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id
  res.send(`Payment methods for cart ${cartId}`);
})

app.get('/available_payments', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  })
})

app.post('/login', (req, res) => {
  let userName = '';

  if (req.body && req.body.userName) {
    userName = req.body.userName;
  }

  res.send(`Welcome ${userName}`);
})

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
})

module.exports = app;
