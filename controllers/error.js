exports.show = (req, res, next) => {
  res.status(404).render('pages/error', { pageTitle: 'Page Not Found' });
}