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
var settingsComponent = (function () {
    function settingsComponent(driveService, authservice, route, authHttp) {
        this.driveService = driveService;
        this.authservice = authservice;
        this.route = route;
        this.authHttp = authHttp;
        this.aid = localStorage.getItem("userid");
        this.pass = { id: this.aid };
    }
    ;
    settingsComponent.prototype.onSubmitTemplateBased = function () {
        var matchPassword = document.getElementById('matchPassword');
        var newPassword = document.getElementById('newPassword').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
        if (newPassword != confirmPassword) {
            matchPassword.innerText = "Password do not match";
        }
        else {
            matchPassword.innerText = "";
            console.log(this.pass);
            this.changePass(this.pass);
        }
    };
    // ngOnInit(){
    //     this.authservice.checkCredentials();
    // }
    settingsComponent.prototype.changePass = function (pass) {
        this.driveService.changePass(pass)
            .subscribe(function (response) {
            console.log("VALUE RECEIVED: " + response);
            var currentPassword = document.getElementById('currentPassword');
            var currentPasswordMatch = document.getElementById('currentPasswordMatch');
            if (response == null) {
                currentPasswordMatch.innerText = "Your Password was incorrect.";
            }
            else {
                currentPasswordMatch.innerText = "";
            }
        }, function (err) {
            console.log("ERROR: " + err);
        }, function () {
            console.log("COMPLETED");
        });
    };
    settingsComponent = __decorate([
        core_1.Component({
            selector: 'settings',
            styleUrls: ['app/public/css/settings.component.css'],
            templateUrl: 'app/public/htmlTemplates/settings.component.html',
            providers: [drive_service_1.DriveService]
        }), 
        __metadata('design:paramtypes', [drive_service_1.DriveService, authentication_service_1.AuthenticationService, router_1.ActivatedRoute, angular2_jwt_1.AuthHttp])
    ], settingsComponent);
    return settingsComponent;
}());
exports.settingsComponent = settingsComponent;
//# sourceMappingURL=settings.component.js.map