const { user_game } = require("../models");

class GameController {
  static async playSuitGame(req, res, next) {
    try {
      if (req.user.user_id) {
        const user = await user_game.findOne({
          where: { user_id: req.user.user_id },
        });
        if (user) {
          res.render("games/suit", { name: user.username });
        } else {
          res.redirect("/users/login");
        }
      } else {
        res.redirect("/users/login");
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = { GameController };
