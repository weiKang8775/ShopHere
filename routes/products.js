const express = require('express');

const router = express.Router();

router.get('/products', (req, res, next) => {
  res.send('<h1>Products Page</h1>');
});

module.exports = router;