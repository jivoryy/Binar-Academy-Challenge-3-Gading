const router = require("express").Router();

router.use((err, req, res, next) => {
  res.status(500).json({
    status: "fail",
    errors: err.message,
  });
});

router.use((req, res, next) => {
  res.status(404).json({
    status: "fail",
    errors: "Page doesn't exist. Please double-check your URL.",
  });
});

module.exports = router;
