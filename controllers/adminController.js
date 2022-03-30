const bcrypt = require("bcrypt");
const {
  user_game,
  user_game_biodata,
  user_game_history,
} = require("../models");

class AdminController {
  static async getAdminDashboard(req, res, next) {
    if (req.session.is_admin) {
      try {
        const user = await user_game.findAll({});
        res.render("admin/dashboard", {
          username: req.session.username,
          is_admin: req.session.is_admin,
          data: user,
        });
      } catch (error) {
        next(error);
      }
    } else {
      res.redirect("/");
    }
  }

  static async getEditForm(req, res, next) {
    if (req.session.is_admin) {
      const user_id = req.params.user_id;
      try {
        const user = await user_game.findOne({
          include: [
            { model: user_game_biodata, as: "biodata" },
            { model: user_game_history, as: "histories" },
          ],
          where: { user_id: user_id },
        });
        res.render("admin/edit_user", {
          username: req.session.username,
          is_admin: req.session.is_admin,
          data: user,
        });
      } catch (error) {
        next(error);
      }
    } else {
      res.redirect("/");
    }
  }

  static async postEditForm(req, res, next) {
    if (req.session.is_admin) {
      const body = req.body;
      const user_id = req.params.user_id;
      try {
        await user_game
          .update(
            {
              username: body.username,
              password: await bcrypt.hash(body.password, 10),
              is_admin: body.is_admin,
            },
            { where: { user_id: user_id } }
          )
          .then(
            await user_game_biodata.update(
              {
                name: body.name,
                bio: body.bio,
              },
              { where: { user_id: user_id } }
            )
          )
          .then(res.redirect("/admin"));
      } catch (error) {
        next(error);
      }
    } else {
      res.redirect("/");
    }
  }

  static async getUserDetail(req, res, next) {
    if (req.session.is_admin) {
      const user_id = req.params.user_id;
      try {
        const user = await user_game.findOne({
          include: [
            { model: user_game_biodata, as: "biodata" },
            { model: user_game_history, as: "histories" },
          ],
          where: { user_id: user_id },
        });
        res.render("admin/detail_user", {
          is_admin: req.session.is_admin,
          username: req.session.username,
          data: user,
        });
      } catch (error) {
        next(error);
      }
    } else {
      res.redirect("/");
    }
  }

  static async deleteUserData(req, res, next) {
    if (req.session.is_admin) {
      const user_id = req.params.user_id;
      try {
        await user_game
          .destroy({ where: { user_id: user_id } })
          .then(
            await user_game_biodata.destroy({ where: { user_id: user_id } })
          )
          .then(
            await user_game_history.destroy({ where: { user_id: user_id } })
          )
          .then(res.redirect("/admin"));
      } catch (error) {
        next(error);
      }
    } else {
      res.redirect("/");
    }
  }
}

module.exports = { AdminController };
