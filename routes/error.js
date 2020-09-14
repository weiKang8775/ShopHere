const express = require('express');
const path = require('path');

const rootDir = require('../helpers/path');

const router = express.Router();

router.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', 'pages', 'error.html'));
});

module.exports = router;