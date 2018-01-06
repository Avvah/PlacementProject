
'use strict';

var mongoose = require ('mongoose'),
Schema = mongoose.Schema;

var CompanyDetailsSchema = new Schema({
    name        : String,
    location    : String,
    cutOffS     :String,
    cutOffP     :String,
    cutOffD     :String,
    cutOffPg     :String,
    branch      :String,
    roundDetails:String,
    skills      :String,
    package     :String,
    date        :String,
    time        :String,
    venue       :String

});

module.exports = mongoose.model ('CompanyDetails',CompanyDetailsSchema);