"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("user_game_biodata", [
      {
        user_id: "2b37a77d-ba6a-49d3-9195-6c9177a23766",
        name: "Umaru Doma",
        bio: "UMR!",
        createdAt: new Date("2015-08-17T13:24:00").toDateString(),
        updatedAt: new Date("2015-08-17T13:24:00").toDateString(),
      },
      {
        user_id: "177bc788-ff42-4bd1-ad58-6e1138513ba6",
        name: "Kitagawa Marin",
        bio: "Cosplay all the time!",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        user_id: "80070c66-1a0f-44f1-8741-efdcdcf5a4dc",
        name: "Hirotaka Nifuji",
        bio: "meh..",
        createdAt: new Date("2019-11-29T22:18:00").toISOString(),
        updatedAt: new Date("2019-11-29T22:18:00").toISOString(),
      },
      {
        user_id: "d0c20b81-97c7-4c16-9fd6-6fa1bad73b7d",
        name: "LORD DEATH METAL",
        bio: "MARI MEMBACA!",
        createdAt: new Date("2021-08-18T09:47:00").toISOString(),
        updatedAt: new Date("2021-08-18T09:47:00").toISOString(),
      },
      {
        user_id: "52ebd20a-4a83-4f32-b8a2-ebbd4f61e9b1",
        name: "ADMIN",
        bio: "Please give me more money",
        createdAt: new Date("2019-08-18T09:47:00").toISOString(),
        updatedAt: new Date("2019-08-18T09:47:00").toISOString(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("user_game_biodata", null);
  },
};
