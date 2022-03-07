const router = require("express").Router();
const { UserController } = require("../controllers/userController");

router.get("/login", UserController.getUserLoginForm);
router.post("/login/auth", UserController.userLogin);

router.get("/logout", UserController.userLogout);

router.get("/register", UserController.getUserRegisterForm);
router.post("/register", UserController.userRegister);

router.get("/changepassword", UserController.getUserChangePasswordForm);
router.post("/changepassword", UserController.userChangePassword);

module.exports = router;
