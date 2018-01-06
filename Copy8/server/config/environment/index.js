'use strict';

var path = require('path');
var _ = require('lodash');
// var constant = require('../../api/constant/constants.controller');



function requiredProcessEnv(name) {
    if (!process.env[name]) {
        throw new Error('You must set the ' + name + ' environment variable');
    }
    return process.env[name];
}

// All configurations will extend these options
// ============================================
var all = {
    env: process.env.NODE_ENV,
    // Root path of server
    root: path.normalize(__dirname + '/../../..'),
    // Server port
    port: process.env.PORT || 8123,
    // Should we populate the DB with sample data?
    seedDB: false,
    // Secret for session, you will want to change this and make it an environment variable
    secrets: {
        session: 'Angular-Placement-secret'
    },
    // List of user roles
    userRoles: ['guest', 'user', 'admin'],
    // MongoDB connection options
    mongo: {
        url: "mongodb://localhost/Angular-Placement-test",
        options: {
            db: {
                safe: true
            }
        }
    },
    email: {
        host: '',
        secure: true,
        auth: {
            user: '',
            pass: ''
        },
        tls: {
            rejectUnauthorized: false
        },
        noreply: ''
    }

};

//var result = constant.environmentDetails(function(err,data){
//   
//    if (data){
//        all.port = data.Port;
//    }
//    
//    console.log(all);
//});

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
        all,
        require('./' + process.env.NODE_ENV + '.js') || {});
