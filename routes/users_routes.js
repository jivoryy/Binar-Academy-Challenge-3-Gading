const router = require("express").Router();
const user = require("../controllers/userController");

router.get("/login", user.getLoginForm);
router.post("/login/auth", user.login);

router.get("/logout", user.logout);

router.get("/register", user.getRegisterForm);
router.post("/register", user.register);

router.get("/changepassword", user.getChangePasswordForm);
router.post("/changepassword", user.changePassword);

module.exports = router;
