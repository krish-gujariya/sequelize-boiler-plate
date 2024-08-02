"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable("users", {
        id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey:true },
        name: { type: Sequelize.STRING, allowNull: false },
        email: { type: Sequelize.STRING, allowNull: false, unique: true },
        password: { type: Sequelize.STRING, allowNull: false },
        created_at: { type: Sequelize.DATE, defaultValue: new Date() },
        updated_at: { type: Sequelize.DATE, defaultValue: new Date() },
        deleted_at: { type: Sequelize.DATE },
      });
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("users")
  }, 
};
