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
var VerifyCodeComponent = (function () {
    function VerifyCodeComponent(driveService, activatedRoute, route) {
        this.driveService = driveService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.v_id = this.activatedRoute.snapshot.params['id'];
        this.vcode = { who: this.v_id };
        this.id = activatedRoute.snapshot.params['id'];
        console.log(this.id);
    }
    VerifyCodeComponent.prototype.onVerify = function (passid) {
        var _this = this;
        var passid = passid;
        console.log("In onVerify()" + passid);
        this.driveService.checkForVerificationCode(this.vcode)
            .subscribe(function (response) {
            console.log("VALUE RECEIVED: " + response);
            if (response === "Correct") {
                _this.route.navigate(['forgot/recover/create/new/password', passid]);
            }
        }, function (err) {
            console.log("ERROR: " + err);
        }, function () {
            console.log("COMPLETED");
        });
    };
    VerifyCodeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styleUrls: ['app/public/css/VerifyCode.component.css'],
            templateUrl: 'app/public/htmlTemplates/VerifyCode.component.html',
            providers: [drive_service_1.DriveService]
        }), 
        __metadata('design:paramtypes', [drive_service_1.DriveService, router_1.ActivatedRoute, router_1.Router])
    ], VerifyCodeComponent);
    return VerifyCodeComponent;
}());
exports.VerifyCodeComponent = VerifyCodeComponent;
//# sourceMappingURL=verifyCode.component.js.map