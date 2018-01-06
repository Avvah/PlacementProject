
'use strict';

var fs = require('fs');

var multiPart = require('connect-multiparty');
var mpMiddleware = multiPart();
var _  = require('lodash');
var StudentDetails = require ('./studentDetails.model');
var mongoose = require ('mongoose');
var nodemailer = require('nodemailer');
var twilio = require('twilio');

//Save Student Details
exports.saveStudentDetails = function(req,res){
    console.log("Save")
     console.log(req.body)
    var studentDetails = req.body;
    var cd = new StudentDetails(studentDetails);
    cd.password = cd._id.toString().split("").splice(-5).join("");
    // console.log(cd._id.toString().split(""));
    var transporter = nodemailer.createTransport("SMTP", {
    service: 'Gmail',
    auth: {
        user: 'nobodyfromnoplace@gmail.com',
        pass: 'nobodywashere'
    }
});

    // StudentDetails.find({},{email:1},function(err,data){
    //     console.log(data.length);
    //        console.log(data[0].email); 
    //        let email_arr = data;
    //     var i;
    //      for(i=0;i<data.length;i++){
    //     var sendreqmail ={
    //         from: 'nobodyfromnoplace@gmail.com',
    //         subject: 'hello world!',
    //         text: 'You Are Getting this from placement.guru. wink whew... Bulk mail works ',
    //         to: data[i].email
    //         }
    //         transporter.sendMail(sendreqmail,function(error,info){
    //             if(error){
    //                 return console.log(error);
    //             }
    //             console.log("Message sent "+i);
    //         });
    //      }

    // });


    // transporter.sendMail({
    //    from: 'nobodyfromnoplace@gmail.com',
    //    to: 'avvahfarhana@gmail.com',
    //    subject: 'hello world!',
    //    text: 'You Are Getting this from placement.guru'
    // });

    

    cd.save(function(err,data){
        if(!err) {
            console.log(data)
            var sendreqmail ={
            from: 'nobodyfromnoplace@gmail.com',
            subject: 'hello world!',
            text: 'You Are Getting this from placement.guru. Please click on the link to download the app and login ',
            to: data.email
            }
            transporter.sendMail(sendreqmail,function(error,info){
                if(error){
                    return console.log(error);
                }
                console.log("Message sent to "+data.email);
            });
            res.json({success : true});
        }
         else
            res.json({success : false});
    })
};

//Show List of Students
 exports.ListOfStudents = function(req , res){
     StudentDetails.find({},function (err , data){
         console.log(data)
           if(!err)
            res.json(data);
         else
            res.json({success : false});
     });
 };

 //Update Student Details
 exports.UpdateStudentDetails = function (req,res){
     console.log("Update")
     console.log(req.body)
     if (req.body._id){delete req.body._id;}
     var studentDetails = req.body;
     StudentDetails.findById(req.params.id, function (err, data){
         var updated = _.merge(data , studentDetails);
         updated.save(function (err){
              if(!err)
            res.json(data);
         else
            res.json({success : false});
         });
     });
 };

exports.ResumeView = function (req,res){
    StudentDetails.findById(req.params.id, function(err,data){
        console.log(data)
        return res.json(200,data);
    });
};

 exports.checkLogin = function(req,res){
     console.log("Am Here")
     var student = req.body;
      var user = req.body
     console.log("student")
     console.log(student)
     StudentDetails.findOne({usn : student.userName,password :  user.password},function (err,userreached){
         console.log("userreached")
         console.log(userreached)
        //  console.log(StudentDetails)
res.json(userreached)
     })
     
 };

 exports.studentsBulkFile= function(req,res){
     
     console.log("I have Got A Bulk File To Be Uploaded")
     console.log(req.body);
     var receivedStudentsFile = req.body;
     //console.log(receivedStudentsFile[1]);
     var transporter = nodemailer.createTransport("SMTP", {
        service: 'Gmail',
        auth: {
            user: 'nobodyfromnoplace@gmail.com',
            pass: 'nobodywashere'
        }
    });

     var i;
     for(i=0;i<req.body.length;i++){
        //Check If its a duplicate entry
        StudentDetails.findOne({usn:receivedStudentsFile[i].usn},
        function(err,data){
            if(data == null)
            {
            console.log("not present");
        
        var cd = new StudentDetails(receivedStudentsFile[i]);
        cd.password = cd._id.toString().split("").splice(-5).join("");
        // console.log(cd._id.toString().split(""));
        cd.save(function(err,data){
            if(!err) {
            console.log(data)
            var sendreqmail ={
            from: 'nobodyfromnoplace@gmail.com',
            subject: 'hello world!',
            text: 'You Are Getting this from placement.guru. Please click on the link to download the app and login ',
            to: data.email
            }
            transporter.sendMail(sendreqmail,function(error,info){
                if(error){
                    return console.log(error);
                }
                console.log("Message sent to "+data.email);
            });
            // res.json({success : true});
        }
         else
            console.log(err)
            // res.json({success : false});
    })
            }
            else
            console.log("Student already exists")
        });
        
        
     }
     

        var err;
            if(!err) {
                // console.log(data)
               res.json({success : true});
            }
            else
               res.json({success : false});
       
 }

 //Mailing to all
//  StudentDetails.find({},{email:1},function(err,data){
//         console.log(data.length);
//            console.log(data[0].email); 
//            let email_arr = data;
//         var i;
//          for(i=0;i<data.length;i++){
//         var sendreqmail ={
//             from: 'nobodyfromnoplace@gmail.com',
//             subject: 'hello world!',
//             text: 'You Are Getting this from placement.guru. wink whew... Bulk mail works ',
//             to: data[i].email
//             }
//             transporter.sendMail(sendreqmail,function(error,info){
//                 if(error){
//                     return console.log(error);
//                 }
//                 console.log("Message sent "+i);
//             });
//          }

//     });