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
var drive_service_1 = require('./drive.service');
var FindMyAccountComponent = (function () {
    function FindMyAccountComponent(driveService, route) {
        var _this = this;
        this.driveService = driveService;
        this.route = route;
        this.find = {};
        this.found = {};
        this.driveService.foundEvent.subscribe(function (data) {
            _this.found = data;
        });
    }
    FindMyAccountComponent.prototype.save = function (isValid, f) {
        var _this = this;
        var findAccount = document.getElementById('account').value;
        var errorStatus = document.getElementById('errorStatus');
        console.log(f);
        console.log(this.find);
        this.driveService.sendFindRequest(this.find)
            .subscribe(function (res) {
            _this.found = res;
            console.log("VALUE RECEIVED: " + res);
            if (_this.found != null) {
                console.log(findAccount);
                _this.route.navigate(['recover', findAccount]);
            }
        }, function (err) {
            console.log(_this.found);
            console.log("ERROR: " + err);
        }, function () {
            console.log("COMPLETED");
        });
    };
    FindMyAccountComponent = __decorate([
        core_1.Component({
            selector: 'find-user',
            styleUrls: ['app/public/css/findMyAccount.component.css'],
            templateUrl: 'app/public/htmlTemplates/findMyAccount.component.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [drive_service_1.DriveService, router_1.Router])
    ], FindMyAccountComponent);
    return FindMyAccountComponent;
}());
exports.FindMyAccountComponent = FindMyAccountComponent;
//# sourceMappingURL=findMyAccount.component.js.map