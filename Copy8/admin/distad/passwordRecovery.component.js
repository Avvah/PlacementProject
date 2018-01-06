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
require('rxjs/add/operator/map');
var PasswordRecoveryComponent = (function () {
    function PasswordRecoveryComponent(driveService, activatedRoute, route) {
        this.driveService = driveService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.found = {};
        this.find_id = this.activatedRoute.snapshot.params['id'];
        this.find = { account: this.find_id };
        this.recovers = [
            { value: 'email', display: 'Email me a link to reset my password' },
            { value: 'phone', display: 'Text me a code to reset my password' }
        ];
        this.id = activatedRoute.snapshot.params['id'];
        // console.log(this.id);
    }
    PasswordRecoveryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reset = { recover: this.recovers[0].value };
        this.driveService.sendFindRequestAgain(this.find)
            .subscribe(function (res) {
            _this.found = res;
            _this.femail = res.email;
            _this.fphoneNumber = res.phoneNumber;
            // console.log(res.phoneNumber);
        });
    };
    PasswordRecoveryComponent.prototype.save = function () {
        var _this = this;
        // console.log(this.reset);
        // console.log(this.femail);
        // console.log(this.reset.recover);
        if (this.reset.recover === "email") {
            this.driveService.sendRecoverRequest(this.reset, this.femail)
                .subscribe(function (response) {
                console.log("VALUE RECEIVED: " + response);
                if (response === "Email Sent") {
                    var linkSent = document.getElementById('linkSent');
                    var onlinksent = document.getElementById('onlinksent');
                    linkSent.innerText = "To reset your password, click on the link sent to your mail associated with this account.";
                    onlinksent.innerHTML = '<a href="/login"><button type="submit" > Ok </button></a>';
                }
            }, function (err) {
                //console.log(resetType);
                console.log("ERROR: " + err);
            }, function () {
                console.log("COMPLETED");
            });
            console.log(this.femail);
        }
        else {
            if (this.reset.recover === "phone") {
                this.driveService.sendRecoverRequest(this.reset, this.fphoneNumber)
                    .subscribe(function (response) {
                    console.log("VALUE RECEIVED: " + response);
                    if (response === "Message Sent") {
                        _this.route.navigate(['verifyCode', _this.find_id]);
                    }
                }, function (err) {
                    //console.log(resetType);
                    console.log("ERROR: " + err);
                }, function () {
                    console.log("COMPLETED");
                });
                console.log(this.fphoneNumber);
            }
        }
    };
    PasswordRecoveryComponent = __decorate([
        core_1.Component({
            selector: 'recover-user',
            styleUrls: ['app/public/css/passwordRecovery.component.css'],
            templateUrl: 'app/public/htmlTemplates/passwordRecovery.component.html',
            providers: [drive_service_1.DriveService]
        }), 
        __metadata('design:paramtypes', [drive_service_1.DriveService, router_1.ActivatedRoute, router_1.Router])
    ], PasswordRecoveryComponent);
    return PasswordRecoveryComponent;
}());
exports.PasswordRecoveryComponent = PasswordRecoveryComponent;
//# sourceMappingURL=passwordRecovery.component.js.map