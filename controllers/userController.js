const { User } = require("../models/user");
const { UserFunc } = require("../models/userFunc");

class UserController {
  static async userLogin(req, res, next) {
    const body = req.body;
    try {
      const listUsers = await UserFunc.getData();
      const user = listUsers.find((user) => user.username == body.username);
      if (user && user.password == body.password) {
        res.send("BERHASIL");
      } else {
        throw {
          status: 404,
          message: "User Not Found",
        };
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = { UserController };
