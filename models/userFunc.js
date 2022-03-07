const fs = require("fs");
const { resolve } = require("path");
const { User } = require("./user");

class UserFunc {
  static getData() {
    return new Promise((resolve, reject) => {
      fs.readFile("./db/user.json", "utf-8", (err, data) => {
        if (err) {
          const error = {
            status: 404,
            message: "Data Not Found!",
          };
          reject(error);
        } else {
          const dataParsed = JSON.parse(data);
          const userList = [];
          dataParsed.map((data) => {
            let userData = new User(
              data.name,
              data.username,
              data.password,
              data.token
            );
            userList.push(userData);
            // console.log(userList);
          });
          resolve(userList);
        }
      });
    });
  }

  static writeData(data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        "./db/user.json",
        JSON.stringify(data, null, 2),
        (err, data) => {
          if (err) {
            let error = {
              status: 500,
              message: "Database Error!",
            };
            reject(error);
          } else {
            let success = {
              status: 200,
              message: "Data Sent!",
            };
            resolve(success);
          }
        }
      );
    });
  }
}

module.exports = { UserFunc };
