const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const productRoutes = require('./routes/products');
const errorRoutes = require('./routes/error');
const rootRoute = require('./routes/root');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(productRoutes);

app.use(rootRoute);

app.use(errorRoutes);

app.listen(3000);