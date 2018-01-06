
'use strict';

var _  = require('lodash');
var CompanyDetails = require ('./companyDetails.model');
var mongoose = require ('mongoose');
mongoose.Promise = global.Promise;

//Save Company Details
exports.saveCompanyDetails = function(req,res){
    var companyDetails = req.body;
    console.log(companyDetails)
    var cd = new CompanyDetails(companyDetails);
    console.log("companyDetails")
    console.log(companyDetails)
    cd.save(function(err,data){
        if(!err)
            res.json({success : true});
         else
            res.json({success : false});
    })
};

//Show List of Companies
 exports.ListOfCompanies = function(req , res){
     CompanyDetails.find({},function (err , data){
           if(!err)
            res.json(data);
         else
            res.json({success : false});
     });
 };

 exports.CompanyView = function(req, res){
     CompanyDetails.findById(req.params.id, function(err, data){
        //  console.log(data)
         return res.json(200,data);
     });
 };

 exports.deleteCompany = function(req,res){
     if (req.body.id){
         delete req.body.id;
     }
     CompanyDetails.remove({_id:req.params.id},function (err,data){
         return res.json(200,data);
 });
 };

 //Update Company Details
 exports.UpdateCompanyDetails = function (req,res){
     if (req.body._id){delete req.body._id;}
     var companyDetails = req.body;
     CompanyDetails.findById(req.params.id, function (err, data){
         var updated = _.merge(data , companyDetails);
         updated.save(function (err){
              if(!err)
            res.json(data);
         else
            res.json({success : false});
         });
     });
 };