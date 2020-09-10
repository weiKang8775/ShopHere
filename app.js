const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const errorRoutes = require('./routes/error');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);

app.get('/', (req, res, next) => {
  res.send('<h1>Welcome To Home Page</h1>');
});

app.use(errorRoutes);

app.listen(3000);