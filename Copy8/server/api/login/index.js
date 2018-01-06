
'use strict';

var express = require ('express');
var controller = require ('./loginDetails.controller');

var router = express.Router();

router.post('/adminsignin',controller.checkLogin);
router.put('/changepassword/:id',controller.changePassword);
router.put('/recover/:id',controller.recoverHelp);
router.put('/find',controller.findThePerson);
router.put('/findAgain',controller.findThePersonAgain);
router.put('/adminsignout/:user_id',controller.signOutCode);
router.put('/changeToNewpassword/:id',controller.changeToNewpassword);
router.put('/verifyPhone',controller.verifyPhone);
router.put('/setFlag/:flag',controller.sFlag);

module.exports = router;