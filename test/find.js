const {
  user_game,
  user_game_biodata,
  user_game_history,
} = require("../models");
const bcrypt = require("bcrypt");
// const find = async () => {
//   const data = await user_game.findOne({ raw: true });
//   if (await bcrypt.compare("himouto", data.password)) console.log("SUCCESS");
//   else console.log("error");
// };

const find = async () => {
  let data = await user_game.findOne({
    include: [
      { model: user_game_biodata, as: "biodata" },
      { model: user_game_history, as: "histories" },
    ],
    where: { username: "umaru" },
  });
  // data = JSON.stringify(data, null, 2);
  // data = JSON.parse(data);
  console.log(data.is_admin);
};

// const find = async () => {
//   let data = await user_game.findAll();
//   data = JSON.stringify(data, null, 2);
//   data = JSON.parse(data);
//   console.log(data);
// };

find();
