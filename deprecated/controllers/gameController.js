const { UserFunc } = require("../models/userFunc");

class GameController {
  static async playSuitGame(req, res, next) {
    try {
      const listUsers = await UserFunc.getData();
      if (listUsers) {
        const user = listUsers.find((user) => user.token == req.session.token);
        if (user) {
          res.render("games/suit", { name: req.session.name });
        } else {
          res.redirect("/users/login");
        }
      } else {
        throw {
          status: 404,
          message: "Database not found!",
        };
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = { GameController };
