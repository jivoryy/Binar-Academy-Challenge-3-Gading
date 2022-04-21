const router = require("express").Router();

router.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

router.use((req, res, next) => {
  res.status(404).json({
    status: "fail",
    errors: "Page doesn't exist. Please double-check your URL.",
  });
});

module.exports = router;
