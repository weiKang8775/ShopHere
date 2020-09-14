const express = require('express');
const path = require('path');

const rootDir = require('../helpers/path');

const router = express.Router();

router.get('/products', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'products', 'index.html'));
});

module.exports = router;