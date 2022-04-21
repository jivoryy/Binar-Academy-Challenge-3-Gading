const bcrypt = require("bcrypt");
const {
  user_game,
  user_game_biodata,
  user_game_history,
} = require("../../../models");

class APIControllerV1 {
  static async createAPI(req, res, next) {
    try {
      if (
        req.body.constructor === Object &&
        Object.keys(req.body).length === 0
      ) {
        res.status(401).json({
          status: 401,
          message: "Not Authorized!",
        });
      }
      const body = req.body;
      if (body.admin_username && body.admin_password) {
        const admin = await user_game.findOne({
          where: { username: body.admin_username },
        });
        if (
          bcrypt.compareSync(body.admin_password, admin.password) &&
          admin.is_admin
        ) {
          if (body.username && body.password && body.name) {
            await user_game
              .create({
                username: body.username,
                password: await bcrypt.hash(body.password, 10),
              })
              .then(async () => {
                const checkUserId = await user_game.findOne({
                  where: { username: body.username },
                });
                await user_game_biodata.create({
                  user_id: checkUserId.user_id,
                  name: body.name,
                });
              });
            if (body.is_admin) {
              await user_game.update(
                {
                  is_admin: body.is_admin,
                },
                { where: { username: body.username } }
              );
            }
            if (body.bio) {
              await user_game_biodata.update(
                {
                  bio: body.bio,
                },
                { where: { username: body.username } }
              );
            }
            res.status(201).json({
              status: 201,
              message: "Data Created!",
            });
          } else {
            res.status(400).json({
              status: 400,
              message: "Bad Request! Please inspect your http request body.",
            });
          }
        } else {
          res.status(401).json({
            status: 401,
            message: "Not Authorized!",
          });
        }
      } else {
        res.status(401).json({
          status: 401,
          message: "Not Authorized!",
        });
      }
    } catch (error) {
      next(error);
    }
  }
  static async readAPI(req, res, next) {
    try {
      if (
        req.body.constructor === Object &&
        Object.keys(req.body).length === 0
      ) {
        res.status(401).json({
          status: 401,
          message: "Not Authorized!",
        });
      }
      const body = req.body;
      if (body.admin_username && body.admin_password) {
        const admin = await user_game.findOne({
          where: { username: body.admin_username },
        });
        if (
          bcrypt.compareSync(body.admin_password, admin.password) &&
          admin.is_admin
        ) {
          const user = await user_game.findAll({
            include: [
              { model: user_game_biodata, as: "biodata" },
              { model: user_game_history, as: "histories" },
            ],
          });
          res.json(user);
        } else {
          res.status(401).json({
            status: 401,
            message: "Not Authorized!",
          });
        }
      } else {
        res.status(401).json({
          status: 401,
          message: "Not Authorized!",
        });
      }
    } catch (error) {
      next(error);
    }
  }
  static async updateAPI(req, res, next) {
    try {
      if (
        req.body.constructor === Object &&
        Object.keys(req.body).length === 0
      ) {
        res.status(401).json({
          status: 401,
          message: "Not Authorized!",
        });
      }
      const body = req.body;
      if (body.admin_username && body.admin_password) {
        const admin = await user_game.findOne({
          where: { username: body.admin_username },
        });
        if (
          bcrypt.compareSync(body.admin_password, admin.password) &&
          admin.is_admin
        ) {
          if (body.user_id) {
            if (body.username) {
              await user_game.update(
                {
                  username: body.username,
                },
                {
                  where: {
                    user_id: body.user_id,
                  },
                }
              );
            }
            if (body.password) {
              await user_game.update(
                {
                  password: await bcrypt.hash(body.password, 10),
                },
                {
                  where: {
                    user_id: body.user_id,
                  },
                }
              );
            }
            if (body.is_admin) {
              await user_game.update(
                {
                  is_admin: body.is_admin,
                },
                {
                  where: {
                    user_id: body.user_id,
                  },
                }
              );
            }
            if (body.name) {
              await user_game_biodata.update(
                {
                  name: body.name,
                },
                {
                  where: {
                    user_id: body.user_id,
                  },
                }
              );
            }
            if (body.bio) {
              await user_game_biodata.update(
                {
                  bio: body.name,
                },
                {
                  where: {
                    user_id: body.user_id,
                  },
                }
              );
            }
            res.status(202).json({
              status: 202,
              message: "Data Updated!",
            });
          } else {
            res.status(400).json({
              status: 400,
              message: "Bad Request! Please inspect your http request body.",
            });
          }
        } else {
          res.status(401).json({
            status: 401,
            message: "Not Authorized!",
          });
        }
      } else {
        res.status(401).json({
          status: 401,
          message: "Not Authorized!",
        });
      }
    } catch (error) {
      next(error);
    }
  }
  static async deleteAPI(req, res, next) {
    try {
      if (
        req.body.constructor === Object &&
        Object.keys(req.body).length === 0
      ) {
        res.status(401).json({
          status: 401,
          message: "Not Authorized!",
        });
      }
      const body = req.body;
      if (body.admin_username && body.admin_password) {
        const admin = await user_game.findOne({
          where: { username: body.admin_username },
        });
        if (
          bcrypt.compareSync(body.admin_password, admin.password) &&
          admin.is_admin
        ) {
          if (body.user_id) {
            await user_game.destroy({
              where: { user_id: body.user_id },
            });
            await user_game_biodata.destroy({
              where: { user_id: body.user_id },
            });
            await user_game_history.destroy({
              where: { user_id: body.user_id },
            });
            res.status(202).json({
              status: 202,
              message: "Data Deleted!",
            });
          } else {
            res.status(400).json({
              status: 400,
              message: "Bad Request! Please inspect your http request body.",
            });
          }
        } else {
          res.status(401).json({
            status: 401,
            message: "Not Authorized!",
          });
        }
      } else {
        res.status(401).json({
          status: 401,
          message: "Not Authorized!",
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = { APIControllerV1 };
