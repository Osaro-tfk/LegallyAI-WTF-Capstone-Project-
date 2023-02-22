const sequelize = require("./config/dbConfig");
const {nonLawUser} = require("./models/nonLawUser");

sequelize.sync({force:true}).then(rs=>{
    console.log(rs)
}).catch(err=>{
    console.log(err)
})