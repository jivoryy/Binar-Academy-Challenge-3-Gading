const bcrypt = require("bcrypt");
const {
  user_game,
  user_game_biodata,
  user_game_history,
} = require("../../../models");

class APIControllerV2 {
  static async createAPI(req, res, next) {}

  static async readAPI(req, res, next) {}

  static async updateAPI(req, res, next) {}

  static async deleteAPI(req, res, next) {}
}

module.exports = { APIControllerV2 };
