const router = require("express").Router();

router.get("/suit", (req, res) => {
  res.render("games/suit");
});

module.exports = router;
