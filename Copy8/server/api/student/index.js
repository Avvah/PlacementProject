
'use strict';

var express = require ('express');
var controller = require ('./studentDetails.controller');

var router = express.Router();
var mp = require('connect-multiparty');
var mpMiddleware = mp();

router.post ('/', controller.saveStudentDetails);
router.get ('/list',controller.ListOfStudents);
router.put ('/update/:id',controller.UpdateStudentDetails);
router.get ('/view/:id',controller.ResumeView);
router.post('/signin',controller.checkLogin);
router.post('/inBulk',controller.studentsBulkFile);

module.exports = router;