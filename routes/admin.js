const express = require('express');

const router = express.Router();

// New
router.get('/add-product', (req, res, next) => {
  res.send('<form action="/admin/products/create" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// Create
router.post('/products/create', (req, res, next) => {
  console.log(req.body.title);
  res.redirect('/');
});

// Show
router.get('/products', (req, res, next) => {
  res.send('<h1>Admin Products Page</h1>');
});

module.exports = router;