'use strict';

var mongoose = require ('mongoose'),
Schema = mongoose.Schema;

var LoginDetailsSchema = new Schema({
    username   : String,
    email      : String,
    password   : String,
    phoneNumber: Number,
    vcode      : String,
    institute  : String
});

module.exports = mongoose.model ('LoginDetails',LoginDetailsSchema);