const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// New (Products)
router.get('/add-product', productsController.new);

// Create (Products)
router.post('/products/create', productsController.create);

module.exports = router;