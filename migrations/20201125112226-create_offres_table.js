'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("offres",{
      id:{
          type:Sequelize.INTEGER(11),
          allowNull: false,
          autoIncrement: true,
          primaryKey:true   
      },
      formationId:{
        allowNull:false,
        type:Sequelize.INTEGER(11),
        references:{
          model:'formations',
          key:'id'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
  })
 
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("offres")
  }
};
