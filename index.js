const express = require('express');
// const sequelize = require('./dbmanager')
const {routeManager} = require('./routes/rts.js')
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const app = express();
const port = 4005;
const cors = require('cors');


dotenv.config();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use('/', routeManager);


app.get('/', (req, res) =>{
    res.send("<h1>Home Page</h1>")
});


app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
});