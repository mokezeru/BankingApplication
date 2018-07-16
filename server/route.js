const express = require("express");
const router = express.Router();
const User = require("./user");
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");

const secretkey = "buvuzhila";

//var url = "mongodb://bankdbusername:bank12345@ds137601.mlab.com:37601/bankingappdb";

router.post("/register", (req, res) => {
  console.log("registration post received");
  var conn = req.conn;
  var username = req.body.username;
  var acctNum = req.body.acctNum;

  console.log(req.body.username);

  conn.then(con => {
    var dbo = con.db("bankingappdb");
    console.log("Account Number: " + acctNum);
    dbo
      .collection("customers")
      .findOne({ acctNum: parseInt(acctNum) }, (err, doc) => {
        if (err) throw err; // to do....
        if (typeof doc !== "undefined") {
          if (doc.isAppUser == 1) {
            console.log("Registration API: " + doc);
            console.log("Check isAppUser Here: " + doc.isAppUser);
            var pw = passwordgenerator();
            var user = new User(username, pw);
            //
            const message = sendRegistrationSuccessEmail(pw, doc.address.email);
            console.log(message);

            const id = doc._id;
            console.log("ID: " + id + "Doc: " + doc);
            dbo.collection("customers").update(
              { _id: id },
              {
                $set: {
                  isAppUser: 1,
                  "appUser.userName": username,
                  "appUser.password": pw
                }
              },
              err => {
                if (err) throw err; //TODO:
                console.log("isAppUser: " + doc.isAppUser);
                res
                  .status(200)
                  .json({ message: "Acount Created Successfully" });
              }
            );
          } else {
            res.status(200).json({ message: "You are already an app user!" });
          }
        } else {
          res.json({ error: "error" });
        }
      });
  });
});

router.post("/login", (req, res) => {
  console.log("login");
  console.log(req.body.username);
  var username = req.body.username;
  var pw = req.body.password;
  var user = new User(username, pw);

  console.log("Username and Password: " + username + "  " + pw);
  var dbconn = req.conn;
  var dbo;
  dbconn.then(con => {
    dbo = con.db("bankingappdb");

    dbo
      .collection("customers")
      .findOne(
        { "appUser.userName": username, "appUser.password": pw },
        (err, doc) => {
          if (err) {
            console.log("DB Error");
            res.json({ error: "error" });
            //dbo.close();
          } else {
            console.log("DB Success");
            console.log(doc);
            var acctNum = doc.acctNum;
            var sendToken = { username: username, acctNum: acctNum };
            const token = jwt.sign({ sendToken }, secretkey, {
              expiresIn: "1h"
            });
            console.log(token);
            res.json({ token: token });
            //dbo.close();
          }
        }
      );
  });

});

router.get('/bank/checkbalance',(req,res)=>{
  var conn = req.conn;
  var userData=req.data;
  var acctNum = userData.acctNum;

  res.status(200).json({message:2000});

      conn.then(db=>{
        var dbo = db.db('bankdb');
        dbo.collection('customers').findOne({acctnum:acctNum}, (err, doc) => {
            if(err) res.json({error:'error'});
            if(typeof doc!=='undefined'){
                const account = doc;
                const balance = account.balance;
                    res.status(200).json({message:balance});
            } else {
                res.json({error:'error'});
            }
        })
    })
})

router.post('/bank/transfer',(req,res)=>{
  var conn = req.conn;
  var userData = req.data;
  var acctNum = userData.acctNum;
  var transferAmount = req.body.amount;
  var deduce = -1*transferAmount;
  var beneficiaryAct = req.body.acctNum;

  conn.then(db=>{
      var dbo = db.db('bank');
      dbo.collection('customers').findOne({acctNum:beneficiaryAct},(err,doc)=>{
          if(err){
              res.json({error:'beneficiary not a customer'})
          }else{
              dbo.collection('customers').update({acctNum:acctNum,balance:{$gt:transferAmount}},{$inc:{balance:deduce}},(err)=>{
                  if(err) { res.json({error:'Insufficient Balance'})}
                  else{
                      dbo.collection('customers').update({acctNum:beneficiaryAct},{$inc:{balance:transferAmount}},(err)=>{
                          if(err) throw err;
                          res.json({message:'transfer success'});
                      })
                  }
              })
          }
      }); //end of dbo.collec
  });// end of conn.then
})



function passwordgenerator() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 8; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

function sendRegistrationSuccessEmail(pw, email) {
  console.log('Email Method: '+email);
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bankingapp.mwa@gmail.com",
      pass: "meba2018"
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  var mailOptions = {
    from: "bankingapp.mwa@gmail.com",
    to: email,
    subject: "Online Banking Registration",
    text: `Dear Customer you have successfully signed up into our system!
            Your Password is: ${pw}
            Enjoy our service in your comfort zone!
          `
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = router;
