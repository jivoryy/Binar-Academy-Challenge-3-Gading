const router = require("express").Router();
const { UserController } = require("../controllers/userController");

router.get("/login", (req, res) => {
  res.render("users/login", { error: "" });
});

router.get("/register", (req, res) => {
  res.render("users/signup");
});

router.get("/changepassword", (req, res) => {
  res.render("users/changepass");
});

router.post("/login/auth", UserController.userLogin);

module.exports = router;
