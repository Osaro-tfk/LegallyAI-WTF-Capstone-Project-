const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
const sequelize = new Sequelize(process.env.DATABASE,process.env.DATABASE_USER,'Christ@2022',{
    dialect:"mysql", 
    host:"localhost" //the ip address of the online server would replace this
});


module.exports = sequelize;