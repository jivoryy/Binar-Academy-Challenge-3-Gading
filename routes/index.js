const router = require("express").Router();
const users = require("./users_routes");
const games = require("./games_routes");
const admin = require("./admin_routes");
const APIroute = require("./api_routes");
const exceptionHandling = require("./exception_handling_routes");

router.get("/", (req, res) => {
  res.render("home", {
    username: req.session.username,
    is_admin: req.session.is_admin,
  });
});
router.use("/admin", admin);
router.use("/users", users);
router.use("/games", games);
router.use("/api", APIroute);
router.use(exceptionHandling);

module.exports = router;
