module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('meetups', 'canceled_at', {
      type: Sequelize.DATE,
      allowNull: true,
      default: null,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('meetups', 'canceled_at');
  },
};
