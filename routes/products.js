const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// Index
router.get('/products', productsController.index);

// New and Create are in admin routes

module.exports = router;