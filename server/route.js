const express = require("express");
const router = express.Router();
const User = require('./user');
const jwt = require('jsonwebtoken');

const secretkey = 'buvuzhila';

router.post('/register', (req , res)=>{
    console.log('registration post received');
    var conn = req.conn;
    var username = req.body.username;
    var acctNum = req.body.acctNum;
    //var email = req.body.email;
    console.log(req.body.username);

    //uncomment the below line to test
    res.json({error:'success'});

//     conn.then(db=>{
//         var dbo = db.db('bankdb');
//         dbo.collection('customers').find({acctnum:acctNum}).toArray((err, doc)=>{
//             if(err) throw err; //to do....
//             if(typeof doc!=='undefined'){
//                 var pw = passwordgenerator();
//                 var user = new User(username, pw);
//                 //
//                 const message = sendRegistrationSuccessEmail(pw);
//                 console.log(message);

//                 const id = doc[0]._id;
//                 dbo.collection('customers').update({_id:id},{$set:{isUser:1, appuser:user}},(err)=>{
//                     if(err) throw err; //TODO:
//                     res.status(200).json({message:"Acount Created Successfully"});
//                 })
//             }else{
//                 res.json({error:'error'});
//             }

//         })
//     })
 })

router.post('/login', (req, res) => {
console.log('login');
console.log(req.body.username);
var username = req.body.username;
var pw = req.body.password;
var user = new User(username,pw);

//TODO: Check the user exists in the db???

const acctNum = 12344;//TODO: get this from the db

var sendToken = {username: username, acctNum: '12345'};
  const token = jwt.sign({sendToken}, secretkey, {expiresIn: '1h'});
  console.log(token);
  res.json({token: token});
//res.json({message:'done'});

})
router.get('/bank/ahmed',(req, res) => {
  res.json({name: 'Tester'});
})

function passwordgenerator(){
    var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 8; i++){
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

    return text;
}

function sendRegistrationSuccessEmail(pw){
    return 'Notification Email Sent!';
}

module.exports=router;
