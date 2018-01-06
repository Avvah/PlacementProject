// * Main application routes
// */

'use strict';

module.exports = function(app){

    //Insert routes

     app.use('/api/company', require('./api/company/index'));
     app.use('/api/student', require('./api/student/index'));
     app.use('/api/login', require('./api/login/index'));


    // app.route('/*')
    //     .get(function(req,res){
    //         res.sendfile(app.get('appPath')+ '/index.html');
    //     });
};