const express = require("express");
const router = express.Router();
const User = require('./user');
var nodemailer = require('nodemailer');

router.post('/bank/register', (req , res)=>{
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

function passwordgenerator(){
    return "test"; // to be done
}

function sendRegistrationSuccessEmail(){
   
    return 'Notification Email Sent!';
}

module.exports=router;