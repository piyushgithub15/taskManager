const express = require("express");
const mongoose = require("mongoose");
//const Router = require("./routes");
require('./config/database')
const port = 3000;
const bodyparser = require('body-parser')
const todoroutes = require("./routes/tasks_routes");

const app = express();


app.use(express.json());

app.use(express.urlencoded({extended:false}))

//app.use(bodyparser.urlencoded({extended:true}))

app.use('/',todoroutes);

app.listen(port, ()=>{
    console.log(`COnnection is secured at ${port}`)
})