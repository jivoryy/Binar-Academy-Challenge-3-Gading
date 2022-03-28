"use strict";
const { Model } = require("sequelize");
const user_game = require("./user_game");
module.exports = (sequelize, DataTypes) => {
  class user_game_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_game_history.init(
    {
      user_id: DataTypes.UUID,
      playedAt: DataTypes.DATE,
      result: DataTypes.STRING,
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true,
      freezeTableName: true,
      modelName: "user_game_history",
    }
  );
  return user_game_history;
};
