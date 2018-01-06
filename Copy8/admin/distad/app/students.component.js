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
var studentComponent = (function () {
    function studentComponent(driveservice, authservice, route) {
        this.driveservice = driveservice;
        this.authservice = authservice;
        this.route = route;
    }
    studentComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.authservice.checkCredentials()) {
            this.route.navigate(['login']);
        }
        this.driveservice.getAll()
            .subscribe(function (s) {
            _this.students = s;
            console.log(s);
        }, function (err) { return console.log(err); });
    };
    studentComponent = __decorate([
        core_1.Component({
            selector: "students",
            styleUrls: ['app/public/css/students.component.css'],
            templateUrl: 'app/public/htmlTemplates/students.component.html',
            providers: [drive_service_1.DriveService]
        }), 
        __metadata('design:paramtypes', [drive_service_1.DriveService, authentication_service_1.AuthenticationService, router_1.Router])
    ], studentComponent);
    return studentComponent;
}());
exports.studentComponent = studentComponent;
//# sourceMappingURL=students.component.js.map