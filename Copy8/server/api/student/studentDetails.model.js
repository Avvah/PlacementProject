
'use strict';

var mongoose = require ('mongoose'),
Schema = mongoose.Schema;

var StudentDetailsSchema = new Schema({
    usn        : String,
    email      : String,
    fullName   : String,
    address    : String,
    phoneNumber: Number,
    objective: String,
    degree: String,
    degree1: String,
    degree2: String,
    degree3: String,
    board: String,
    board1: String,
    board2: String,
    board3: String,
    institute: String,
    institute1: String,
    institute2: String,
    institute3: String,
    yearOfPassing:String,
    yearOfPassing1:String,
    yearOfPassing2:String,
    yearOfPassing3:String,
    marks:Number,
    marks1:Number,
    marks2:Number,
    marks3:Number,
    training:String,
    skills:String,
    projects:{type:String,default:"Null"},
    activities:String,
    hobbies:String,
    studentName:String,
    password: String
});

module.exports = mongoose.model ('StudentDetails',StudentDetailsSchema);