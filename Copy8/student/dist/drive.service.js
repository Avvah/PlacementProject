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
var studentprofile_array_type_1 = require('./studentprofile-array-type');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var DriveService = (function () {
    function DriveService(http, requestOptions) {
        this.http = http;
        this.requestOptions = requestOptions;
    }
    Object.defineProperty(DriveService, "parameters", {
        get: function () {
            return [[http_1.Http]];
        },
        enumerable: true,
        configurable: true
    });
    DriveService.prototype.getCompanyMockArray = function () {
        return this.http
            .get('http://localhost:8123/api/company/list')
            .map(function (response) { return response.json(); });
    };
    DriveService.prototype.add = function (comp) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8123/api/company', JSON.stringify(comp), { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (response) {
            /* this function is executed every time there's a new output */
            console.log("VALUE RECEIVED: " + response);
        }, function (err) {
            /* this function is executed when there's an ERROR */
            console.log("ERROR: " + err);
        }, function () {
            /* this function is executed when the observable ends (completes) its stream */
            console.log("COMPLETED");
        });
    };
    DriveService.prototype.getAll = function () {
        return this.http
            .get('http://localhost:8123/api/student/list')
            .map(function (response) { return response.json(); });
    };
    DriveService.prototype.addstud = function (sach) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
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
    //Adding Students Complete Details which they edit/fill
    DriveService.prototype.addstudentProfile = function (model) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(model + "  " + (localStorage.getItem("userid")));
        return this.http.put('http://localhost:8123/api/student/update/' + (localStorage.getItem("userid")), model, { headers: headers })
            .map(function (res) { return res; });
    };
    //Getting a Student Profile
    DriveService.prototype.getStudentProfile = function () {
        return this.http
            .get('http://localhost:8123/api/student/list')
            .map(function (response) { response.json().data; console.log(response); });
    };
    DriveService.prototype.changePass = function (pass) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:5322/changePassword', pass, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (response) {
            console.log("VALUE RECEIVED: " + response);
        }, function (err) {
            console.log("ERROR: " + err);
        }, function () {
            console.log(pass);
            console.log("COMPLETED");
        });
    };
    DriveService.prototype.sendLogin = function (pass) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(this.http);
        return this.http.post('http://localhost:5322/recieveLogin', pass, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (response) {
            console.log("VALUE RECEIVED: " + response);
        }, function (err) {
            console.log("ERROR: " + err);
        }, function () {
            console.log(pass);
            console.log("COMPLETED");
        });
    };
    DriveService.prototype.getdataforresume = function () {
        console.log("Reached Service");
        console.log("StudentProfileArrayType");
        console.log(studentprofile_array_type_1.StudentProfileArrayType);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:8123/api/student/view/' + localStorage.getItem("userid"))
            .map(function (response) { return response.json(); });
    };
    //Adding The ImageFile From ProfileComponent 
    DriveService.prototype.addStudentImage = function (imageFile) {
        console.log("Reached Servive to Upload Image To DB");
        console.log(imageFile);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:8123/api/student/image/' + localStorage.getItem("userid"), imageFile, { headers: headers })
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
    DriveService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_1.RequestOptions])
    ], DriveService);
    return DriveService;
}());
exports.DriveService = DriveService;
//# sourceMappingURL=drive.service.js.map