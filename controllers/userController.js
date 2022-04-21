const {
  user_game,
  user_game_biodata,
  user_game_history,
} = require("../models");
const bcrypt = require("bcrypt");
const passportLocal = require("../lib/passport-local");

function logout(req, res) {
  req.session.destroy();
  res.redirect("/");
}

async function changePassword(req, res, next) {
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

async function register(req, res, next) {
  const body = req.body;
  try {
    const checkUser = await user_game.findOne({
      where: { username: body.username },
    });
    if (checkUser) {
      res.redirect("/users/login");
    } else {
      await user_game
        .register({
          username: body.username,
          password: body.password,
          is_admin: false,
        })
        .then(async () => {
          const checkUserId = await user_game.findOne({
            where: { username: body.username },
          });
          await user_game_biodata.createNew({
            user_id: checkUserId.user_id,
            name: body.name,
            bio: body.bio,
          });
        })
        .then(
          async () => {
            const user = await user_game.findOne({
              where: { username: body.username },
            });
            if (!user) res.redirect("/users/register");
            res.redirect("/users/login");
          },
          (reason) => res.send(reason)
        );
    }
  } catch (error) {
    next(error);
  }
}

function getLoginForm(req, res) {
  res.render("users/login", { error: req.query.wrong });
}

function getChangePasswordForm(req, res) {
  res.render("users/changepass", { error: req.query.wrong });
}

function getRegisterForm(req, res) {
  res.render("users/signup");
}

login = passportLocal.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/users/login",
  failureFlash: true,
});

module.exports = {
  login,
  logout,
  changePassword,
  register,
  getLoginForm,
  getChangePasswordForm,
  getRegisterForm,
};
