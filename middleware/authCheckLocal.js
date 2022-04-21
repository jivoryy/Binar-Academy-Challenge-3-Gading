function checkAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/users/login");
}

function checkNotAuth(req, res, next) {
  if (!req.isAuthenticated()) return next();
  res.redirect("/");
}

module.exports = { checkAuth, checkNotAuth };
