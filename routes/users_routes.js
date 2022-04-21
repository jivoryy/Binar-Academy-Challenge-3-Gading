const router = require("express").Router();
const user = require("../controllers/userController");
const checkAuthLocal = require("../middleware/authCheckLocal");

router.get("/login", checkAuthLocal.checkNotAuth, user.getLoginForm);
router.post("/login/auth", checkAuthLocal.checkNotAuth, user.login);

router.get("/logout", checkAuthLocal.checkAuth, user.logout);

router.get("/register", checkAuthLocal.checkNotAuth, user.getRegisterForm);
router.post("/register", checkAuthLocal.checkNotAuth, user.register);

router.get(
  "/changepassword",
  checkAuthLocal.checkAuth,
  user.getChangePasswordForm
);
router.post("/changepassword", checkAuthLocal.checkAuth, user.changePassword);

module.exports = router;
