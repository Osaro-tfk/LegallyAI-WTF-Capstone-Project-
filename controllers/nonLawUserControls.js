const sequelize = require('../config/dbConfig.js');
const {nonLawUser} = require('../models/nonLawUser.js');
const jwt = require('jsonwebtoken'); //to give some security when passing info from client to server
const bcrypt = require('bcryptjs'); //to secure password

// this function handles the registration info from non-law users. Bcrypt is used to hash the password

const saltRounds = bcrypt.genSaltSync(10);
const secret = "secret";

const register = async (req, res) => {
    const nlUser = {
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, saltRounds),
    };

    nonLawUser.findAll({
        where: {
            email: req.body.email,
        },
    })
      .then((res)=>{
          if (res.length >= 1){
              res.status(200).json([{
                  message: "email address already exists. Please enter another email address or login"
              }]);
          }else {
              nonLawUser.create(nlUser)
                .then((rs)=>{
                    console.log(rs);
                    res.status(200).json([{message: "data created"}]);
                })
                .catch((err)=>{
                    console.log(err);
                    res.status(403).json([{message: "err"}]);
                });
          };
      })
      .catch((err)=>{
          console.log(err);
      });
    
};


// this function handles non-law user login
const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    Customer.findOne({
      where: {
        email: email,
      },
    })
      .then((rs) => {
        if (rs) {
          const validity = bcrypt.compareSync(password, rs.dataValues.password);
          if (validity == true) {
            const token = jwt.sign(rs.dataValues, secret);
            res.status(200).json([{ message: token }]);
          } else {
            res.status(200).json([{ message: "invalid" }]);
          }
        } else {
          res.status(200).json([{ message: "invalid" }]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

// this function handles the dashboard for non-law users

module.exports = {register, login};