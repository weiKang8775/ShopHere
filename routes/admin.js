const express = require('express');
const path = require('path');

const rootDir = require('../helpers/path')

const router = express.Router();

// New
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'admin', 'add-product.html'));
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