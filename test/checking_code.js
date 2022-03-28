const { user_game } = require("../models");

// const deleteone = async () => {
//   await user_game
//     .destroy({
//       where: { username: "umaru" },
//     })
//     .then(console.log("DELETING SUCCESS!"));
// };

// deleteone();

const restoreone = async () => {
  await user_game
    .restore({
      where: { username: "umaru" },
    })
    .then(console.log("RESTORING SUCCESS!"));
};

restoreone();
