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
var router_1 = require('@angular/router');
var authentication_service_1 = require('./authentication.service');
var auth_guard_1 = require('./auth.guard');
var LoginComponent = (function () {
    function LoginComponent(service, route, authguard) {
        this.service = service;
        this.route = route;
        this.authguard = authguard;
        this.register = {};
        this.user = {};
        this.errormsg = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.removeItem("userid");
        console.log("Flag" + this.authguard.logFlag);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.user);
        this.service.login(this.user)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log("VALUE RECEIVED: " + response);
            if (response === null) {
                console.log("Navigating to login page");
                _this.route.navigate(['login']);
                $('#myModal').modal('show');
            }
            else {
                console.log(response._id);
                _this.authguard.logFlag = 1;
                //Assigning logFlag value in server
                _this.service.logFlag(1)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    console.log("VALUE RECEIVED: " + response);
                    console.log("Particular Data");
                    _this.authguard.logFlag = response;
                }, function (err) {
                    console.log("ERROR: " + err);
                }, function () {
                    console.log("COMPLETED");
                });
                console.log("FlagN" + _this.authguard.logFlag);
                localStorage.setItem("userid", response._id);
                console.log(localStorage);
                _this.route.navigate(['']);
            }
        }, function (err) {
            // console.log(user)
            console.log("ERROR: " + err);
        }, function () {
            //  console.log("tduy")
            console.log("COMPLETED");
        });
    };
    LoginComponent.prototype.submit = function () {
        console.log(this.register);
        this.service.sendRequest(this.register);
    };
    LoginComponent.prototype.requestReg = function () {
        $('#myModal1').modal('show');
    };
    LoginComponent.prototype.goToRecover = function () {
        this.route.navigate(['find']);
    };
    LoginComponent.prototype.gotoRegisterRequest = function () {
        this.route.navigate(['register/request']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login-form",
            styleUrls: ['app/public/css/login.component.css'],
            templateUrl: 'app/public/htmlTemplates/login.component.html',
            providers: [authentication_service_1.AuthenticationService]
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router, auth_guard_1.AuthGuard])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map