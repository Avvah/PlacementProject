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
var AuthGuard = (function () {
    function AuthGuard(router, service) {
        this.router = router;
        this.service = service;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        this.service.logFlag(2)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log("VALUE RECEIVED: " + response);
            console.log("Particular Data");
            _this.logFlag = response;
            console.log(_this.logFlag);
            if (_this.logFlag == 1 || _this.logFlag != 0) {
                // if(this.router.url === '/login'){
                //  this.router.navigate(['login']);
                // }
                // else
                // logged in so return true
                return true;
            }
        }, function (err) {
            console.log("ERROR: " + err);
        }, function () {
            console.log("COMPLETED");
        });
        //Else redirect them to login page
        this.router.navigate(['login']);
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map