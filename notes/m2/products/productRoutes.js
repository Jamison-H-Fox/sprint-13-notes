const express = require('express');

const router = express.Router(); // notice the Uppercase R

// this file will only be used when the route begins with "/products"
// so we can remove that from the URLs, so "/products" becomes simply "/"
router.get('/', (req, res) => {
  res.status(200).send('hello from the GET /products endpoint');
});

router.get('/:id', (req, res) => {
  res.status(200).send('hello from the GET /products/:id endpoint');
});

router.post('/', (req, res) => {
  res.status(200).send('hello from the POST /products endpoint');
});

// ... and any other endpoint related to the user's resource

// after the route has been fully configured, we then export it to be required where needed
module.exports = router; // standard convention dictates that this is the last line on the file