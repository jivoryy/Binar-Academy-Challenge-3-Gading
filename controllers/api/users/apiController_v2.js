const bcrypt = require("bcrypt");
const {
  user_game,
  user_game_biodata,
  user_game_history,
} = require("../../../models");
const authToken = require("../../../lib/authToken");

async function createAPI(req, res, next) {
  const body = req.body;
  try {
    if (body.username && body.password && body.name) {
      await user_game.register({
        username: req.body.username,
        password: req.body.password,
        is_admin: false,
      });
      const checkUserId = await user_game.findOne({
        where: { username: body.username },
      });
      if (!checkUserId)
        res.status(500).json({
          status: 500,
          message: "Internal Server Error. Please contact the server admin.",
        });
      await user_game_biodata.createNew({
        user_id: checkUserId.user_id,
        name: body.name,
        bio: null,
      });

      if (body.is_admin)
        user_game.update(
          { is_admin: true },
          { where: { username: body.username } }
        );

      if (body.bio)
        user_game_biodata.update(
          { bio: body.bio },
          { where: { username: body.username } }
        );
    } else {
      res.status(400).json({
        status: 400,
        message: "Bad Request! Please inspect your http request body.",
      });
    }
  } catch (error) {
    next(error);
  }
}

async function readAPI(req, res, next) {
  const body = req.body;
  try {
    const user = await user_game.findAll({
      include: [
        { model: user_game_biodata, as: "biodata" },
        { model: user_game_history, as: "histories" },
      ],
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
}

async function updateAPI(req, res, next) {
  const body = req.body;
  try {
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
  } catch (error) {
    next(error);
  }
}

async function deleteAPI(req, res, next) {
  const body = req.body;
  try {
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
  } catch (error) {
    next(error);
  }
}

async function adminLogin(req, res, next) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).json({
      status: 400,
      message: "Bad Request! Please inspect your http request body.",
    });
  }
  const body = req.body;
  try {
    if (body.username && body.password) {
      const user = await user_game.authenticate({
        username: body.username,
        password: body.password,
      });
      if (!user.is_admin)
        res.status(403).json({
          status: "fail",
          errors: "You are forbidden to access this endpoint.",
        });

      const payload = {
        user_id: user.user_id,
        username: user.username,
        is_admin: user.is_admin,
      };

      res.json({
        role: "ADMIN",
        username: user.username,
        token: authToken.generateAccessToken(payload),
      });
    } else {
      res.status(400).json({
        status: 400,
        message: "Bad Request! Please inspect your http request body.",
      });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { createAPI, readAPI, updateAPI, deleteAPI, adminLogin };
