const Sequelize = require('sequelize');
const sequelize = require('../src/database/connection');
const { Formation } = require('./relation');

module.exports  = sequelize.define("users",{
    id:{
        type:Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey:true   
    },
    
    mail: {
        type:Sequelize.STRING(30),
        allowNull:false,
        unique: true,
    },
    name: Sequelize.STRING(30),
    prenom: Sequelize.STRING(30),
    password: Sequelize.STRING(30),
    naissence_etud:Sequelize.STRING(30)
},

{
    tableName: 'users', timestamps: false, underscored: false
})