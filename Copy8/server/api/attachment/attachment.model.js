'use strict';

var mongoose = require( 'mongoose' ),
  Schema = mongoose.Schema;

var AttachmentSchema = new Schema( {
  objectType: Number,
  fileType: String,
  filePath: String,
  name: String,
  size: Number
} );

module.exports = mongoose.model( 'Attachment', AttachmentSchema );