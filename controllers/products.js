exports.new = (req, res, next) => {
  res.render('products/add-product', { pageTitle: 'Add Product' });
}

exports.create = (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
}

exports.index = (req, res, next) => {
  res.render('products/index', { pageTitle: 'Products' });
}