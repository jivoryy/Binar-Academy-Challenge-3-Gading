"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
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

    static #encrypt = (password) => bcrypt.hashSync(password, 10);

    checkPassword = (password) => bcrypt.compareSync(password, this.password);

    static register = ({ username, password, is_admin }) => {
      const encryptedPassword = this.#encrypt(password);
      return this.create({
        username,
        password: encryptedPassword,
        is_admin,
      });
    };

    static authenticate = async ({ username, password }) => {
      try {
        const user = await this.findOne({ where: { username } });
        if (!user) return Promise.reject("User not found!");

        const isPasswordValid = user.checkPassword(password);
        if (!isPasswordValid) return Promise.reject("Wrong password");

        return Promise.resolve(user);
      } catch (err) {
        return Promise.reject(err);
      }
    };
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
