'use strict';

var express = require( 'express' );
var controller = require( './attachment.controller' );

var router = express.Router();
router.post( '/studentImages', controller.uploadStudentPic );
router.get( '/downloadAttachment/:folderName/:fileName', controller.downloadAttachment );


module.exports = router;
