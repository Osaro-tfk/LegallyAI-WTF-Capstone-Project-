const express = require('express');
const {register, login} = require('../controllers/nonLawUserControls.js');

const routeManager = express.Router();
routeManager.post('/signUp', register);
routeManager.post('/login', login);


module.exports = {routeManager}