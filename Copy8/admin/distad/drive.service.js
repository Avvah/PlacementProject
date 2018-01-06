"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var angular2_toaster_1 = require('angular2-toaster/angular2-toaster');
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
var DriveService = (function () {
    function DriveService(http, requestOptions, tosterservice, route) {
        this.http = http;
        this.requestOptions = requestOptions;
        this.tosterservice = tosterservice;
        this.route = route;
        this.foundEvent = new core_1.EventEmitter();
        this.toasterService = tosterservice;
    }
    Object.defineProperty(DriveService, "parameters", {
        get: function () {
            return [[http_1.Http]];
        },
        enumerable: true,
        configurable: true
    });
    //List Of Companies In Drive
    DriveService.prototype.getCompanyMockArray = function () {
        return this.http
            .get('http://localhost:8123/api/company/list')
            .map(function (response) { return response.json(); });
    };
    //Function To Add A new Company Details from company-profile.component
    DriveService.prototype.add = function (comp) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8123/api/company', JSON.stringify(comp), { headers: headers });
    };
    //All Students in DB
    DriveService.prototype.getAll = function () {
        return this.http
            .get('http://localhost:8123/api/student/list')
            .map(function (response) { return response.json(); });
    };
    //Adding A single(new) student.
    DriveService.prototype.addstud = function (sach) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        // headers.append("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        return this.http.post('http://localhost:8123/api/student', (sach), { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (response) {
            console.log("VALUE RECEIVED: " + response);
        }, function (err) {
            console.log(sach);
            console.log("ERROR: " + err);
        }, function () {
            console.log("COMPLETED");
        });
    };
    //Updating or edited student profile details
    DriveService.prototype.addstudentProfile = function (model) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:8123/api/student/update/' + (model.id), model, { headers: headers })
            .map(function (res) { return res; });
    };
    //Changing Admins Password
    DriveService.prototype.changePass = function (pass) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:8123/api/login/changepassword/' + (pass.id), pass, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Adding Students In Bulk Using CSV File
    DriveService.prototype.addClassFile = function (sach) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        // headers.append("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        return this.http.post('http://localhost:8123/api/student/inBulk', (sach), { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (response) {
            console.log("VALUE RECEIVED: " + response);
        }, function (err) {
            console.log(sach);
            console.log("ERROR: " + err);
        }, function () {
            console.log("COMPLETED");
        });
    };
    //Fetching the dataOfIndividual Students.
    DriveService.prototype.getdataforresume = function (idd) {
        console.log("Reached Service");
        console.log("StudentProfileArrayType");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:8123/api/student/view/' + idd)
            .map(function (response) { return response.json(); });
    };
    //Adding The ImageFile From ProfileComponent 
    DriveService.prototype.addStudentImage = function (id, imageFile) {
        console.log("Reached Servive to Upload Image To DB");
        console.log(imageFile);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:8123/api/student/image/' + id, imageFile, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (response) {
            console.log("VALUE RECEIVED: " + response);
            console.log("Particular Data");
            console.log(response);
        }, function (err) {
            console.log(imageFile);
            console.log("ERROR: " + err);
        }, function () {
            console.log("COMPLETED");
        });
    };
    //Deletes the company from DB based on the id
    DriveService.prototype.deleteDrive = function (compid) {
        console.log("Im in drive");
        console.log(compid);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('http://localhost:8123/api/company/delete/' + compid, { headers: headers })
            .map(function (res) { return res; });
    };
    //Recieves the company details from DB based on the id passed.
    DriveService.prototype.getdataforcompany = function (compid) {
        console.log("Im reached");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:8123/api/company/data/' + compid)
            .map(function (response) { return response.json(); });
    };
    //Updating Company Details
    DriveService.prototype.updateCompany = function (model) {
        console.log(model.id);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:8123/api/company/update/' + (model.id), model, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (response) {
            console.log("VALUE RECEIVED: " + response);
        }, function (err) {
            console.log(model);
            console.log("ERROR: " + err);
        }, function () {
            console.log("COMPLETED");
        });
    };
    //Asking For A verificaton code to recover the account.
    DriveService.prototype.sendRecoverRequest = function (resetType, user) {
        console.log(user);
        console.log(resetType);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:8123/api/login/recover/' + (user), resetType, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // // foundEventemail: EventEmitter<any> = new EventEmitter();
    // // foundEventphoneNumber: EventEmitter<any> = new EventEmitter();
    // found;
    // f_email: string;
    // f_phone: number;
    //FInding Accound based on email/phone number/username
    DriveService.prototype.sendFindRequest = function (find) {
        console.log(find);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:8123/api/login/find', find, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //To get the result in recover page
    DriveService.prototype.sendFindRequestAgain = function (find) {
        console.log(find);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:8123/api/login/findAgain', find, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Changing password when user forgot thier account
    DriveService.prototype.changetoNewPass = function (pass) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:8123/api/login/changeToNewpassword/' + (pass.id), pass, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Cross verifying the code entered and code associated with the account.
    DriveService.prototype.checkForVerificationCode = function (vcode) {
        // console.log(vcode);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:8123/api/login/verifyPhone', (vcode), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DriveService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_1.RequestOptions, angular2_toaster_1.ToasterService, router_1.Router])
    ], DriveService);
    return DriveService;
}());
exports.DriveService = DriveService;
;
//# sourceMappingURL=drive.service.js.map