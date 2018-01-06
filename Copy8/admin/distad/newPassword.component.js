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
var NewPasswordComponent = (function () {
    function NewPasswordComponent(driveService, router) {
        this.driveService = driveService;
        this.router = router;
        this.nid = this.router.snapshot.params['id'];
        this.pass = { vcode: this.nid };
        this.id = router.snapshot.params['id'];
        console.log(this.id);
    }
    ;
    NewPasswordComponent.prototype.onSubmitTemplateBased = function () {
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
    NewPasswordComponent.prototype.changePass = function (pass) {
        this.driveService.changetoNewPass(pass)
            .subscribe(function (response) {
            console.log("VALUE RECEIVED: " + response);
            var onPasswordChange = document.getElementById('onPasswordChange');
            onPasswordChange.innerHTML = '<h4>Your Password Has Been Changed.</h4><br><a href="/login"><button>Go To Login PAge</button></a>';
        }, function (err) {
            console.log("ERROR: " + err);
        }, function () {
            console.log("COMPLETED");
        });
    };
    NewPasswordComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styleUrls: ['app/public/css/newPassword.component.css'],
            templateUrl: 'app/public/htmlTemplates/newPassword.component.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [drive_service_1.DriveService, router_1.ActivatedRoute])
    ], NewPasswordComponent);
    return NewPasswordComponent;
}());
exports.NewPasswordComponent = NewPasswordComponent;
//# sourceMappingURL=newPassword.component.js.map