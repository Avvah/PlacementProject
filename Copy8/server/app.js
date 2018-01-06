//Main application file

'use strict';

//Set default node environment to development
process.env.SERVER_URL = "localhost:6000/";
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment');

 var bodyParser = require('body-parser');
 var multer = require('multer');

//  app.use(function(req, res, next) { //allow cross origin requests
//         res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
//         res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//         res.header("Access-Control-Allow-Credentials", true);
//         next();
//     });

mongoose.connect(config.mongo.url, config.mongo.options);


console.log(config.mongo);
//Setup SERVER_URL
var app = express();
var server = require('http').createServer(app);


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require('./config/express')(app);
require('./routes')(app);

//Start server
server.listen(8123,function(){
    console.log('Express server started on %d, in %s mode', config.port, app.get('env'));
});

//Expose app
var exports = module.exports = app;