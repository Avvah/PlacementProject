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
var User = (function () {
    function User(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    return User;
}());
exports.User = User;
var users = [
    new User('admin@admin.com', 'admin'),
    new User('QWE123', 'qwerty')
];
var AuthenticationService = (function () {
    function AuthenticationService(http, router, requestOptions) {
        this.http = http;
        this.router = router;
        this.requestOptions = requestOptions;
        console.log(router);
    }
    Object.defineProperty(AuthenticationService, "parameters", {
        get: function () {
            return [[http_1.Http]];
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem("user");
        this.router.navigate(['login']);
    };
    AuthenticationService.prototype.login = function (user) {
        /*var authenticatedUser = users.find(u => u.email === user.userName);
        if(authenticatedUser && authenticatedUser.password === user.password ){
            console.log("sucess");
            localStorage.setItem("user",JSON.stringify(authenticatedUser));
            this.router.navigate(['notify']);
            return true;
        }
        else{
            return false;
        }*/
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8090/api/student/signin', (user), { headers: headers });
    };
    AuthenticationService.prototype.checkCredentials = function () {
        if (localStorage.getItem("user") === null) {
            this.router.navigate(['Login']);
            console.log(localStorage.getItem("user"));
            return false;
        }
        else {
            this.router.navigate(['notify']);
            console.log(localStorage.getItem("user"));
        }
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, http_1.RequestOptions])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map