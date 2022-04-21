const router = require("express").Router();
const users = require("./users_routes");
const games = require("./games_routes");
const admin = require("./admin_routes");
const usersAPI = require("./users_api_routes");
const exceptionHandling = require("./exception_handling_routes");
const checkAuthLocal = require("../middleware/authCheckLocal");

router.get("/", (req, res) => {
  if (!req.user) res.render("home", { username: null, is_admin: null });
  res.render("home", {
    username: req.user.username,
    is_admin: req.user.is_admin,
  });
});
router.use("/admin", admin);
router.use("/users", users);
router.use("/games", checkAuthLocal.checkAuth, games);
router.use("/api", usersAPI);
router.use(exceptionHandling);

module.exports = router;
