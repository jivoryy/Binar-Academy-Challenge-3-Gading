const router = require("express").Router();
const { GameController } = require("../controllers/gameController");

router.get("/suit", GameController.playSuitGame);

module.exports = router;
