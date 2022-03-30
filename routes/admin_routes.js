const router = require("express").Router();
const { AdminController } = require("../controllers/adminController");

router.get("/", AdminController.getAdminDashboard);
router.get("/edit/:user_id", AdminController.getEditForm);
router.post("/edit/:user_id", AdminController.postEditForm);
router.get("/detail/:user_id", AdminController.getUserDetail);
router.get("/delete/:user_id", AdminController.deleteUserData);

module.exports = router;
