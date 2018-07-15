const express = require("express");
const router = express.Router();
const User = require('./user');
const jwt = require('jsonwebtoken');

const secretkey = 'buvuzhila';

router.post('/register', (req , res)=>{
    var conn = req.conn;
    var username = req.body.username;
    var accNum = req.body.accNum;
    var email = req.body.email;

    conn.then(db=>{
        var dbo = db.db('bankdb');
        dbo.collection('customers').find({acctnum:accNum}).toArray((err, doc)=>{
            if(err) throw err; //to do....
            if(typeof doc!=='undefined'){
                var pw = passwordgenerator();
                var user = new User(username, pw);
                //
                const message = sendRegistrationSuccessEmail();
                console.log(message);

                const id = doc[0]._id;
                dbo.collection('customers').update({_id:id},{$set:{isUser:1, appuser:user}},(err)=>{
                    if(err) throw err; //TODO:
                    res.status(200).json({message:"Acount Created Successfully"});
                })
            }else{
                res.sendStatus(403);
            }

        })
    })
})

router.get('/login', (req, res) => {

  var user = {username: 'berry', acctnumber: '12345'};
  const token = jwt.sign(user, secretkey, {expiresIn: '1h'});
  res.json({token: token});

})
router.get('/bank/ahmed',(req, res) => {
  res.json({name: 'Tester'});
})

function passwordgenerator(){
    return "test"; // to be done
}

function sendRegistrationSuccessEmail(){
    return 'Notification Email Sent!';
}

module.exports=router;
