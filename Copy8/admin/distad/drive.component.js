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
var drive_service_1 = require('./drive.service');
var authentication_service_1 = require('./authentication.service');
var router_1 = require('@angular/router');
var angular2_jwt_1 = require('angular2-jwt');
var driveComponent = (function () {
    function driveComponent(driveService, authservice, route, authHttp) {
        this.driveService = driveService;
        this.authservice = authservice;
        this.route = route;
        this.authHttp = authHttp;
        // jwt: string;
        // decodedJwt: string;
        // response: string;
        // api: string;
        // jwtHelper: JwtHelper = new JwtHelper();
        this.companyArrays = [];
        // this.jwt = localStorage.getItem('userid');
        // // this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
        // this.decodedJwt = this.jwtHelper.decodeToken(this.jwt);
        // // this.jwtDate = this.jwtHelper.getTokenExpirationDate(this.jwt);
        // this.jwtExpired = this.jwtHelper.isTokenExpired(this.jwt);
    }
    ;
    driveComponent.prototype.ngOnInit = function () {
        // if(!this.authservice.checkCredentials()){
        // 	this.route.navigate(['login'])
        // }
        var _this = this;
        this.driveService.getCompanyMockArray()
            .subscribe(function (s) {
            _this.companyArrays = s;
            console.log(s);
        }, function (err) { return console.log(err); });
    };
    driveComponent.prototype.deleteDrive = function (comid) {
        var _this = this;
        console.log("comid: " + comid);
        this.driveService.deleteDrive(comid)
            .subscribe(function (response) {
            console.log("VALUE RECEIVED: " + response);
            console.log("Company Deleted");
            _this.route.navigate(['dummy']);
            console.log(response);
            _this.route.navigate(['home/drive']);
        }, function (err) {
            console.log("ERROR: " + err);
        }, function () {
            console.log("COMPLETED");
        });
    };
    driveComponent = __decorate([
        core_1.Component({
            selector: 'drive',
            styleUrls: ['app/public/css/sampledrive.css'],
            templateUrl: 'app/public/htmlTemplates/sampledrive.html',
            providers: [drive_service_1.DriveService]
        }), 
        __metadata('design:paramtypes', [drive_service_1.DriveService, authentication_service_1.AuthenticationService, router_1.Router, angular2_jwt_1.AuthHttp])
    ], driveComponent);
    return driveComponent;
}());
exports.driveComponent = driveComponent;
//# sourceMappingURL=drive.component.js.map