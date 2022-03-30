"use strict";
const { Model } = require("sequelize");
const user_game_biodata = require("./user_game_biodata");
module.exports = (sequelize, DataTypes) => {
  class user_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_game.hasOne(models.user_game_biodata, {
        foreignKey: { name: "user_id", type: DataTypes.UUID },
        as: "biodata",
      });
      user_game.hasMany(models.user_game_history, {
        foreignKey: { name: "user_id", type: DataTypes.UUID },
        as: "histories",
      });
      models.user_game_biodata.belongsTo(user_game, {
        foreignKey: { name: "user_id", type: DataTypes.UUID },
      });
      models.user_game_history.belongsTo(user_game, {
        foreignKey: { name: "user_id", type: DataTypes.UUID },
      });
    }
  }
  user_game.init(
    {
      user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      is_admin: { type: DataTypes.BOOLEAN, defaultValue: 0 },
    },
    {
      sequelize,
      paranoid: true,
      freezeTableName: true,
      modelName: "user_game",
    }
  );
  return user_game;
};
