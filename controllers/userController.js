const {
  user_game,
  user_game_biodata,
  user_game_history,
} = require("../models");
const bcrypt = require("bcrypt");

class UserController {
  static async userLogin(req, res, next) {
    const body = req.body;
    try {
      const user = await user_game.findOne({
        where: { username: body.username },
      });
      if (!user) {
        res.redirect("/users/login?wrong=1");
      }
      if (bcrypt.compareSync(body.password, user.password)) {
        req.session.user_id = user.user_id;
        req.session.username = user.username;
        req.session.is_admin = user.is_admin;
        res.redirect("/");
      } else {
        res.redirect("/users/login?wrong=1");
      }
    } catch (error) {
      next(error);
    }
  }

  static userLogout(req, res) {
    req.session.destroy();
    res.redirect("/");
  }

  static async userChangePassword(req, res, next) {
    const body = req.body;
    try {
      if (req.session.user_id) {
        const user = await user_game.findOne({
          where: { user_id: req.session.user_id },
        });
        if (bcrypt.compareSync(body.password, user.password)) {
          user_game.update(
            {
              password: await bcrypt.hash(body.new_password, 10),
            },
            {
              where: {
                user_id: req.session.user_id,
              },
            }
          );
          res.redirect("/");
        } else {
          res.redirect("/users/changepassword?wrong=1");
        }
      } else {
        res.redirect("/users/login");
      }
    } catch (error) {
      next(error);
    }
  }

  static async userRegister(req, res, next) {
    const body = req.body;
    try {
      await user_game
        .create({
          username: body.username,
          password: bcrypt.hash(body.password, 10),
        })
        .then(
          async () => {
            const user = await user_game.findOne({
              where: { username: body.username },
            });
            if (!user) res.redirect("/");
            req.session.user_id = user.user_id;
            req.session.username = user.username;
            req.session.is_admin = user.is_admin;
            res.redirect("/");
          },
          (reason) => res.send(reason)
        );
    } catch (error) {
      next(error);
    }
  }

  static getUserLoginForm(req, res) {
    res.render("users/login", { error: req.query.wrong });
  }

  static getUserChangePasswordForm(req, res) {
    res.render("users/changepass", { error: req.query.wrong });
  }

  static getUserRegisterForm(req, res) {
    res.render("users/signup");
  }
}

module.exports = { UserController };
