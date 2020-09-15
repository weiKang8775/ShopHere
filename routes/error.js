const express = require('express');

const errorController = require('../controllers/error');

const router = express.Router();

// Index
router.use(errorController.show);

module.exports = router;