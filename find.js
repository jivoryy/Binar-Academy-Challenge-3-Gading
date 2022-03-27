const { user_game, user_game_biodata, user_game_history } = require("./models");
const bcrypt = require("bcrypt");
// const find = async () => {
//   const data = await user_game.findOne({ raw: true });
//   if (await bcrypt.compare("himouto", data.password)) console.log("SUCCESS");
//   else console.log("error");
// };

const find = async () => {
  const data = await user_game.findAll({
    include: [user_game_biodata, user_game_history],
  });
  // console.log(JSON.stringify(data));
  console.log(JSON.stringify(data, null, 2));
};

find();
