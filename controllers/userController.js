const { User } = require("../models-for-static/user");
const { UserFunc } = require("../models-for-static/userFunc");

class UserController {
  static async userLogin(req, res, next) {
    const body = req.body;
    try {
      const listUsers = await UserFunc.getData();
      if (listUsers) {
        const user = listUsers.find((user) => user.username == body.username);
        if (user && user.password == body.password) {
          req.session.username = user.username;
          req.session.name = user.name;
          req.session.token = user.token;
          res.redirect("/");
        } else {
          res.redirect("/users/login?wrong=1");
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

  static userLogout(req, res) {
    req.session.destroy();
    res.redirect("/");
  }

  static async userChangePassword(req, res, next) {
    const body = req.body;
    try {
      const listUsers = await UserFunc.getData();
      if (listUsers) {
        let indexReplace;
        const user = listUsers.find((user, index) => {
          if (user.username == req.session.username) {
            indexReplace = index;
            return user;
          }
        });
        if (user && user.password == body.password) {
          const newUser = new User(
            user.name,
            user.username,
            body.new_password,
            user.token
          );
          listUsers.splice(indexReplace, 1, newUser);
          let writeFile = await UserFunc.writeData(listUsers);
          if (writeFile.status === 200) {
            res.status(writeFile.status);
            req.session.password = body.new_password;
            res.redirect("/");
          } else {
            throw writeFile;
          }
        } else {
          res.redirect("/users/changepassword?wrong=1");
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

  static async userRegister(req, res, next) {
    const body = req.body;
    try {
      const listUsers = await UserFunc.getData();
      if (listUsers) {
        let newToken = "dicobatokenbaru";
        let newUser = new User(
          body.name,
          body.username,
          body.password,
          newToken
        );
        listUsers.push(newUser);
        let writeFile = await UserFunc.writeData(listUsers);
        if (writeFile.status === 200) {
          res.status(writeFile.status);
          req.session.name = body.name;
          req.session.username = body.username;
          req.session.token = newToken;
          res.redirect("/");
        } else {
          throw writeFile;
        }
      } else {
        throw {
          status: 404,
          message: "Database not Found!",
        };
      }
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
