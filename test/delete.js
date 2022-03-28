const {
  user_game,
  user_game_biodata,
  user_game_history,
} = require("../models");

user_game.destroy({ where: { username: "Dicoba" } });
