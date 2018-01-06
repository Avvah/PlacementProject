
var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-Parser');
var app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/students',(req,res)=>{
    var students = [
        {"si":"1","name":"Shamnas cv","usn":"4sn12cs074","status":"verified"},
        {"si":"2","name":"Shamnas cv","usn":"4sn12cs074","status":"verified"},
        {"si":"3","name":"Shamnas cv","usn":"4sn12cs074","status":"Not Verified"},
        {"si":"4","name":"Shamnas cv","usn":"4sn12cs074","status":"verified"},
        ]
    res.setHeader("Access-Control-Allow-Origin","*");
    res.send(students);
})

app.get('/companies',(req,res)=>{
    var companies = [
         {name:'Rubixoft Technologies',location:'Mangalore',cutOff:'123',branch:'cs',roundDetails:'NIL',skills:'NIL',package:'NIL', date:'01-01-2017',time:'6:00 am',venue:'Kankanady'},
         {name:'Tech Mahindra',location:'Pune',cutOff:'123',branch:'cs',roundDetails:'NIL',skills:'NIL',package:'NIL', date:'01-03-2017',time:'10:00 am',venue:'abst'}
]
    res.setHeader("Access-Control-Allow-Origin","*");
    res.send(companies);
})

app.post('/api',function(req,res){
    console.log('reached');

   
   var hahaha = req.body;
   console.log(hahaha);
   
    res.send("yes");
    res.end();
});

app.post('/studentdata',function(req,res){
    console.log('reached');
    console.log(req.body);

   res.setHeader("Access-Control-Allow-Origin","*");
   var haha = req.body;
   console.log(haha);
    res.send({res:"yes"});
});

app.post('/studentprofile',function(req,res){
    console.log('reached');
    console.log(req.body);

  // res.setHeader("Access-Control-Allow-Origin","*");
   var haha = req.body;
   console.log(haha);
    res.send("yes");
});

app.post('/recieveLogin',function(req,res){
    console.log('password reached');
    // console.log(req.body);

  // res.setHeader("Access-Control-Allow-Origin","*");
   var haha = req.body;
   console.log(haha);
    res.send("yes");
});

app.post('/changePassword',function(req,res){
    console.log('password reached');
    // console.log(req.body);

  // res.setHeader("Access-Control-Allow-Origin","*");
   var haha = req.body;
   console.log(haha);
    res.send("yes");
});

// app.post('/studentsignin',function(req,res){
//     console.log('password reacheddd');
//     // console.log(req.body);

//   res.setHeader("Access-Control-Allow-Origin","*");
//    var haha = req.body;
//    console.log(haha);
   
//     // res.send({res:"yes"});
//     res.send("yes");
// });

app.listen(5322);
console.log("started");
