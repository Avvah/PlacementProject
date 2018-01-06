'use strict';

var _  = require('lodash');
var LoginDetails = require ('./loginDetails.model');
var mongoose = require ('mongoose');
var fs = require('fs');
var multiPart = require('connect-multiparty');
var mpMiddleware = multiPart();
var nodemailer = require('nodemailer');
var twilio = require('twilio');
var crypto = require("crypto");
var EmailTemplate = require('email-templates').EmailTemplate;

exports.checkLogin = function(req,res){
     console.log("Am In Login Node");
     var admin = req.body;
     console.log(admin);
     LoginDetails.findOne({username : admin.userName, password :  admin.password},function (err,userreached){
         console.log("user reached")
         console.log(userreached)
        res.json(userreached)
     })
     
 };

 exports.changePassword = function(req, res){
     console.log("I'm in Change Password Node.");
     var passwordDetails = req.body;
     var newPassword = req.body.newPassword;
     console.log(passwordDetails.currentPassword);

     LoginDetails.findOne({password: passwordDetails.currentPassword},
                 function(error, data){
                     if(data!=null){
                         LoginDetails.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
                            if (err) {
                                return next(err);
                            }
                            else {
                                res.json(data);
                            }
                        });
                     }
                     else{
                         //console.log("no Match Found"+data);
                         console.log(data);
                         res.json(data)
                     }
        } );   

    
 }

 exports.findThePerson = function(req,res)
 {
     console.log(req.body);
     var argumentPassed = req.body.account;
     console.log(argumentPassed);
     LoginDetails.findOne({email: argumentPassed},
     function(err,data){
         if(data!=null){
             console.log("Email Found");
             var obj = {email:data.email, phoneNumber:data.phoneNumber}
             return res.json(obj);
         }
         else{
             console.log("Email Not Found. . . Checking if its a phone Number");
             LoginDetails.findOne({phoneNumber: argumentPassed},
             function(error,data2){
                 if(data2!=null){
                        console.log("Found in Phone");
                        console.log("this is"+data2.email);
                        var obj = {email:data2.email, phoneNumber:data2.phoneNumber}
                        return res.json(obj);
                     
                 }
                 else{
                     console.log("Not found in PhoneNumber. . . Checking if it is in username. . .")
                     LoginDetails.findOne({username: argumentPassed},
                     function(error3, data3){
                         if(data3!=null){
                            console.log("Found in username");
                            var obj = {email:data3.email, phoneNumber:data3.phoneNumber}
                            return res.json(obj);
                         }
                         else{
                             console.log("Not Found Anywhere. . Spam user..")
                             return res.json(data3);
                         }
                     })
                 }
             })
         }
     })
 }

 exports.findThePersonAgain = function(req,res)
 {
     console.log(req.body);
     var argumentPassed = req.body.account;
     console.log(argumentPassed);
     LoginDetails.findOne({email: argumentPassed},
     function(err,data){
         if(data!=null){
             console.log("Email Found");
             var obj = {email:data.email, phoneNumber:data.phoneNumber}
             return res.json(obj);
         }
         else{
             console.log("Email Not Found. . . Checking if its a phone Number");
             LoginDetails.findOne({phoneNumber: argumentPassed},
             function(error,data2){
                 if(data2!=null){
                        console.log("Found in Phone");
                        console.log("this is"+data2.email);
                        var obj = {email:data2.email, phoneNumber:data2.phoneNumber}
                        return res.json(obj);
                     
                 }
                 else{
                     console.log("Not found in PhoneNumber. . . Checking if it is in username. . .")
                     LoginDetails.findOne({username: argumentPassed},
                     function(error3, data3){
                         if(data3!=null){
                            console.log("Found in username");
                            var obj = {email:data3.email, phoneNumber:data3.phoneNumber}
                            return res.json(obj);
                         }
                         else{
                             console.log("Not Found Anywhere. . Spam user..")
                             return res.json(data3);
                         }
                     })
                 }
             })
         }
     })
 };


exports.recoverHelp = function(req,res){
    console.log(req.params.id);
    console.log(req.body);
    var argumentPassed =  req.params.id;

    var type =  req.body.recover;

    console.log(type);

    if(type === "email"){
        LoginDetails.findOne({email: argumentPassed},
     function(err,data){
         if(data!=null){
             console.log("Email Found");
             var mycode=data.vcode;
             console.log(mycode);
             console.log("Send email to the mail");
             
                var transporter = nodemailer.createTransport("SMTP", {
                service: 'Gmail',
                auth: {
                    user: 'nobodyfromnoplace@gmail.com',
                    pass: 'nobodywashere'
                }
            });

            var sendCode = {
                mycode:data.vcode,
                from:'nobodyfromnoplace@gmail.com',
                to: 'avvahfarhana@gmail.com',
                subject: 'Password Reset',
                text: 'To reset the password, click on the below link: http://localhost:3000/forgot/recover/create/new/password/'+mycode,
               // html: '<p>To reset {{mycode}} the password, click on the below link:<br>http://localhost:3000/forgot/recover/create/new/password/{{mycode}}</p>'
                
            };

            transporter.sendMail(sendCode,function(error,info){
                if(error){
                    return console.log(error);
                }
                console.log("Message sent");
            });
            return res.json("Email Sent");
         }
         else{
             console.log("email not found:(")
         }
     });
        
    }

    else
    if(type === "phone"){
        console.log("entered phone loop")
        LoginDetails.findOne({phoneNumber: argumentPassed},
     function(err,data){
         console.log("entered phone loop function")
         if(data!=null){
             console.log("entered phone loop not null")
        var mycode=data.vcode;
        console.log("Send code to phone"+data.phoneNumber);
        var client = twilio('AC9cfe7d4c1e96302184e75d8da0e55e90', '420f65cf4956d6afd38c88966dcbfa21');
        // Send the text message.
        client.sendMessage({
        to: '+917259336989',
        from: '+12512201616',
        body: 'Your Verification Code is '+mycode
        });
        console.log("MEssage sent")
        return res.json("Message Sent");
         }
         else{
              console.log("Number not found:(");
              return res.json("Message not Sent");
         }

    });
    }
};

exports.signOutCode = function(req,res){
    console.log("Im in signout node");
    console.log(req.params.user_id);
    var vbcode = crypto.randomBytes(20).toString('hex');
    console.log(vbcode);
    var vlcode = vbcode.slice(-7);
    var vcode = {vcode:vlcode};
    console.log(vcode);
    LoginDetails.findByIdAndUpdate(req.params.user_id, vcode, function(err, user) {
                            if (err) {
                                res.json(null);
                            }
                            else {
                               res.json(user);
                            }
                        });
}

exports.changeToNewpassword = function(req,res){
    console.log("I'm in Change To new Password Node.");
     var passwordDetails = req.body;
     var newPassword = req.body.newPassword;

        LoginDetails.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
        if (err) {
            return res.json(err);
        }
        else {
            res.json(user);
        }
    });

}

exports.verifyPhone = function(req,res){
    console.log("verifyPhone");
    console.log(req.body);
    var letsVerify = req.body;
    var who = req.body.who;

    LoginDetails.findOne({email: who},
     function(err,data){
         if(data!=null){
             console.log("Email Found");
             LoginDetails.findOne({email : who, vcode :  letsVerify.vcode},
             function (err,data1){
                 if(data1!=null){
                     return res.json("Correct")
                 }
                 else{
                     return res.json("Wrong");
                 }
                
            });
         }
         else{
             console.log("Email Not Found. . . Checking if its a phone Number");
             LoginDetails.findOne({phoneNumber: who},
             function(error,data2){
                 if(data2!=null){
                        console.log("Found in Phone");
                        LoginDetails.findOne({phoneNumber : who, vcode :  letsVerify.vcode},
                        function (err,data4){
                            if(data4!=null){
                                return res.json("Correct")
                            }
                            else{
                                return res.json("Wrong");
                            }
                
                        });
                }  
                else{
                     console.log("Not found in PhoneNumber. . . Checking if it is in username. . .")
                     LoginDetails.findOne({username: who},
                     function(error3, data3){
                         if(data3!=null){
                            console.log("Found in username"+data3);
                            LoginDetails.findOne({username : who, vcode :  letsVerify.vcode},
                            function (err,data5){
                                if(data5!=null){
                                    console.log(data5);
                                    return res.json("Correct")
                                }
                                else{
                                    return res.json("wrong");
                                }
                
                            });
                         }
                         else{
                             console.log("Not Found Anywhere. . Spam user..")
                             return res.json(data3);
                         }
                     })
                 }
             })
         }
     });
};


exports.sFlag = function(req,res){
    console.log("im in setflag");
    console.log(req.params.flag);
    var logFlag = 0;
    if(req.params.flag == 1){
        var logFlag = req.params.flag;
    }
    else
    if(req.params.flag == 0){
        var logFlag = req.params.flag;
    }
    console.log(logFlag);
    res.json(logFlag);
}