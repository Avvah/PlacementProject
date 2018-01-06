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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var auth_guard_1 = require('./auth.guard');
var AuthenticationService = (function () {
    function AuthenticationService(http, router, requestOptions, authguard) {
        this.http = http;
        this.router = router;
        this.requestOptions = requestOptions;
        this.authguard = authguard;
    }
    Object.defineProperty(AuthenticationService, "parameters", {
        get: function () {
            return [[http_1.Http]];
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.logout = function (user_id) {
        //console.log(user_id);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:8123/api/login/adminsignout/' + user_id, { headers: headers })
            .map(function (res) { return res; });
    };
    AuthenticationService.prototype.login = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8123/api/login/adminsignin', (user), { headers: headers });
    };
    AuthenticationService.prototype.logFlag = function (flag) {
        console.log("Im in logFlag" + flag);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:8123/api/login/setFlag/' + flag, { headers: headers });
    };
    AuthenticationService.prototype.checkCredentials = function () {
        if (localStorage.getItem("userid") === null) {
            console.log("Im returing false");
            return false;
        }
        else {
            console.log("Im returning true");
            return true;
        }
    };
    //Sending The Request Form for Admin To Decide Whether To Accept Or Reject
    AuthenticationService.prototype.sendRequest = function (requestData) {
        console.log("Reached Servive to send request");
        console.log(requestData);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:8123/api/adminLogin/request', requestData, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (response) {
            console.log("VALUE RECEIVED: " + response);
            console.log("Particular Data");
            console.log(response);
        }, function (err) {
            console.log(requestData);
            console.log("ERROR: " + err);
        }, function () {
            console.log("COMPLETED");
        });
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, http_1.RequestOptions, auth_guard_1.AuthGuard])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map