const {
  user_game,
  user_game_biodata,
  user_game_history,
} = require("../models");
const restoreone = async () => {
  await user_game
    .restore({
      where: { user_id: "2b37a77d-ba6a-49d3-9195-6c9177a23766" },
    })
    .then(
      await user_game_biodata.restore({
        where: { user_id: "2b37a77d-ba6a-49d3-9195-6c9177a23766" },
      })
    )
    .then(
      await user_game_history.restore({
        where: { user_id: "2b37a77d-ba6a-49d3-9195-6c9177a23766" },
      })
    )
    .then(console.log("RESTORING SUCCESS"));
};

restoreone();
