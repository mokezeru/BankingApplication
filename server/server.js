const express = require('express');
var validator = require('express-validator');
var bodyParser = require('body-parser');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var router = require('./route');
const util = require('util');
const mongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const connection= util.promisify(mongoClient.connect)(url);
const app = express();
const secretkey = 'buvuzhila';

app.use(function(req,res,next){
    req.conn = connection;
    return next();
});

app.use('/api/bank', ensureToken ,(req,res,next)=> {
  // TODO
  jwt.verify(req.token, secretkey, (error, data)=> {
      if(error) {
        res.json({error: 'Forbidden 2'})
      } else {
        console.log(data);
        next();
      }
  })
});

function ensureToken(req, res, next) {
  var bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
      var bearerToken = bearerHeader.split(' ')[1];
      req.token = bearerToken;
      next();
    }else{
      res.json({error: 'Forbidden ensureToken'});
    }
}

app.use('/api', router);
app.listen(8080, () => {console.log("Server is running 8080")});
