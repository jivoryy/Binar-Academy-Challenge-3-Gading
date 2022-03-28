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
    await queryInterface.bulkInsert("user_game_history", [
      {
        user_id: "2b37a77d-ba6a-49d3-9195-6c9177a23766",
        playedAt: new Date("2015-08-17T14:24:00").toISOString(),
        result: "WIN",
        score: "3",
        createdAt: new Date("2015-08-17T14:24:00").toISOString(),
        updatedAt: new Date("2015-08-17T14:24:00").toISOString(),
      },
      {
        user_id: "2b37a77d-ba6a-49d3-9195-6c9177a23766",
        playedAt: new Date("2015-08-17T13:30:00").toISOString(),
        result: "WIN",
        score: "3",
        createdAt: new Date("2015-08-17T13:30:00").toISOString(),
        updatedAt: new Date("2015-08-17T13:30:00").toISOString(),
      },
      {
        user_id: "2b37a77d-ba6a-49d3-9195-6c9177a23766",
        playedAt: new Date("2015-08-17T13:32:00").toISOString(),
        result: "WIN",
        score: "3",
        createdAt: new Date("2015-08-17T13:32:00").toISOString(),
        updatedAt: new Date("2015-08-17T13:32:00").toISOString(),
      },
      {
        user_id: "80070c66-1a0f-44f1-8741-efdcdcf5a4dc",
        playedAt: new Date("2019-12-17T13:32:00").toISOString(),
        result: "WIN",
        score: "3",
        createdAt: new Date("2019-12-17T13:32:00").toISOString(),
        updatedAt: new Date("2019-12-17T13:32:00").toISOString(),
      },
      {
        user_id: "80070c66-1a0f-44f1-8741-efdcdcf5a4dc",
        playedAt: new Date("2019-12-17T13:32:30").toISOString(),
        result: "WIN",
        score: "3",
        createdAt: new Date("2019-12-17T13:32:30").toISOString(),
        updatedAt: new Date("2019-12-17T13:32:30").toISOString(),
      },
      {
        user_id: "80070c66-1a0f-44f1-8741-efdcdcf5a4dc",
        playedAt: new Date("2019-12-17T13:33:00").toISOString(),
        result: "WIN",
        score: "3",
        createdAt: new Date("2019-12-17T13:33:00").toISOString(),
        updatedAt: new Date("2019-12-17T13:33:00").toISOString(),
      },
      {
        user_id: "2b37a77d-ba6a-49d3-9195-6c9177a23766",
        playedAt: new Date("2015-08-17T13:35:00").toISOString(),
        result: "LOSE",
        score: "-1",
        createdAt: new Date("2015-08-17T13:35:00").toISOString(),
        updatedAt: new Date("2015-08-17T13:35:00").toISOString(),
      },
      {
        user_id: "2b37a77d-ba6a-49d3-9195-6c9177a23766",
        playedAt: new Date("2015-08-17T13:36:00").toISOString(),
        result: "LOSE",
        score: "-1",
        createdAt: new Date("2015-08-17T13:36:00").toISOString(),
        updatedAt: new Date("2015-08-17T13:36:00").toISOString(),
      },
      {
        user_id: "80070c66-1a0f-44f1-8741-efdcdcf5a4dc",
        playedAt: new Date("2019-12-17T13:33:30").toISOString(),
        result: "WIN",
        score: "3",
        createdAt: new Date("2019-12-17T13:33:30").toISOString(),
        updatedAt: new Date("2019-12-17T13:33:30").toISOString(),
      },
      {
        user_id: "80070c66-1a0f-44f1-8741-efdcdcf5a4dc",
        playedAt: new Date("2019-12-17T13:33:30").toISOString(),
        result: "WIN",
        score: "3",
        createdAt: new Date("2019-12-17T13:33:30").toISOString(),
        updatedAt: new Date("2019-12-17T13:33:30").toISOString(),
      },
      {
        user_id: "2b37a77d-ba6a-49d3-9195-6c9177a23766",
        playedAt: new Date("2015-08-17T13:38:00").toISOString(),
        result: "WIN",
        score: "3",
        createdAt: new Date("2015-08-17T13:38:00").toISOString(),
        updatedAt: new Date("2015-08-17T13:38:00").toISOString(),
      },
      {
        user_id: "177bc788-ff42-4bd1-ad58-6e1138513ba6",
        playedAt: new Date().toISOString(),
        result: "WIN",
        score: "3",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        user_id: "177bc788-ff42-4bd1-ad58-6e1138513ba6",
        playedAt: new Date().toISOString(),
        result: "WIN",
        score: "3",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        user_id: "177bc788-ff42-4bd1-ad58-6e1138513ba6",
        playedAt: new Date().toISOString(),
        result: "LOSE",
        score: "-1",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        user_id: "2b37a77d-ba6a-49d3-9195-6c9177a23766",
        playedAt: new Date("2015-08-17T13:41:00").toISOString(),
        result: "DRAW",
        score: "0",
        createdAt: new Date("2015-08-17T13:41:00").toISOString(),
        updatedAt: new Date("2015-08-17T13:41:00").toISOString(),
      },
      {
        user_id: "d0c20b81-97c7-4c16-9fd6-6fa1bad73b7d",
        playedAt: new Date("2019-08-19T13:41:00").toISOString(),
        result: "DRAW",
        score: "0",
        createdAt: new Date("2019-08-19T13:41:00").toISOString(),
        updatedAt: new Date("2019-08-19T13:41:00").toISOString(),
      },
      {
        user_id: "d0c20b81-97c7-4c16-9fd6-6fa1bad73b7d",
        playedAt: new Date("2019-08-19T13:43:00").toISOString(),
        result: "WIN",
        score: "3",
        createdAt: new Date("2019-08-19T13:43:00").toISOString(),
        updatedAt: new Date("2019-08-19T13:43:00").toISOString(),
      },
      {
        user_id: "d0c20b81-97c7-4c16-9fd6-6fa1bad73b7d",
        playedAt: new Date("2019-08-19T13:45:00").toISOString(),
        result: "DRAW",
        score: "0",
        createdAt: new Date("2019-08-19T13:45:00").toISOString(),
        updatedAt: new Date("2019-08-19T13:45:00").toISOString(),
      },
      {
        user_id: "d0c20b81-97c7-4c16-9fd6-6fa1bad73b7d",
        playedAt: new Date("2019-08-19T13:49:00").toISOString(),
        result: "DRAW",
        score: "0",
        createdAt: new Date("2019-08-19T13:49:00").toISOString(),
        updatedAt: new Date("2019-08-19T13:49:00").toISOString(),
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
    await queryInterface.bulkDelete("user_game_history", null);
  },
};
