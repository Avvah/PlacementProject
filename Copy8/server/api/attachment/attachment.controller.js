'use strict';
var _ = require( 'lodash' );
var fs = require( 'fs' );
var Attachment = require( '../attachment/attachment.model' );
var mime = require( 'mime' );
var mkdirp = require( 'mkdirp' );
var CONSTANTS = require( '../constant/constants' );
var mongoose = require ('mongoose');
var BASE_FOLDER_NAME = "attachmentdownloads";
var serverControllerPath = '/api/attachment/downloadAttachment';

exports.uploadStudentPic = function( req, res ) {

  var attachmentType = CONSTANTS.AttachmentType;

  var fileData = {
    name: req.files.fileInfo.name,
    size: req.files.fileInfo.size || 0,
    fileType: req.files.fileInfo.extension,
    objectType: attachmentType.STUDENT_PHOTO.type,
    tempPath : req.files.fileInfo.tempPath
    
  };
  uploadFile(fileData,attachmentType.STUDENT_PHOTO, function(err, result){

    if ( err ) {

      handleError(req.user.accountId, res, err );
      return;
    }

    res.status( 200 ).send( result );

  });


};


// exports.downloadAttachment = function( req, response ) {
   
//   var folderName = req.params.folderName;
//   var fileName = req.params.fileName;
//   var attachmentFilePath = [ __dirname, '..', BASE_FOLDER_NAME, folderName, fileName ].join( '/' );
//   fs.readFile( attachmentFilePath, "binary", function( err, file ) {
//     if ( err ) {
//       response.writeHead( 500, { "Content-Type": "text/plain" } );
//       response.write( err + "\n" );
//       response.end();
//       return;
//     }
//     var type = mime.lookup( attachmentFilePath );
//     var charset = mime.charsets.lookup( type );
//     response.writeHead( 200, { "Content-Type": type + (charset ? '; charset=' + charset : '') } );
//     response.end( file, "binary" );
//   } );
// };

exports.downloadAttachments = downloadAttachments;
