const Sequelize = require('sequelize')
const sequelize = require("../config/dbConfig.js");

const nonLawUser = sequelize.define("nonLawUser",{
    userId:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    firstName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    lastName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:Sequelize.TEXT,
        allowNull:false
    },
});

module.exports = {nonLawUser}