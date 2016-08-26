'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Todo',
      'completed',
      Sequelize.BOOLEAN
    );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'Todo',
      'completed'
    );
  }
};
