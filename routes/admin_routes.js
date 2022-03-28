const router = require("express").Router();
const bcrypt = require("bcrypt");
const { AdminController } = require("../controllers/adminController");
const {
  user_game,
  user_game_biodata,
  user_game_history,
} = require("../models");

router.get("/", AdminController.getAdminDashboard);
router.get("/edit/:user_id", AdminController.getEditForm);
router.post("/edit/:user_id", AdminController.postEditForm);
router.get("/detail/:user_id", AdminController.getUserDetail);
router.get("/delete/:user_id", AdminController.deleteUserData);

module.exports = router;
