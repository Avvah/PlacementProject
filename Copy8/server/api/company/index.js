
'use strict';

var express = require ('express');
var controller = require ('./companyDetails.controller');

var router = express.Router();

router.post ('/', controller.saveCompanyDetails);
router.get ('/list',controller.ListOfCompanies);
router.get ('/data/:id',controller.CompanyView);
router.delete('/delete/:id',controller.deleteCompany);
router.put ('/update/:id',controller.UpdateCompanyDetails);


module.exports = router;