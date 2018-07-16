const express = require('express');
var validator = require('express-validator');
var bodyParser = require('body-parser');
var cors = require('cors');
var router = require('./route');
const util = require('util');
const mongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const connection= util.promisify(mongoClient.connect)(url);
const app = express();

app.use(function(req,res,next){
    req.conn = connection;
    return next();
});



app.use('/api', router);



app.listen(8080, ()=>{console.log("Server is running 8080")});