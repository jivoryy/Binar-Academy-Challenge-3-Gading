const {
  user_game,
  user_game_biodata,
  user_game_history,
} = require("../models");

user_game_history.destroy({
  where: { user_id: "9d9a9d84-a624-4525-a54e-864067317749" },
});
