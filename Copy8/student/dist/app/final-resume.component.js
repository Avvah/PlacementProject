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
var core_1 = require("@angular/core");
var drive_service_1 = require("./drive.service");
var router_1 = require("@angular/router");
var FinalResumeComponent = (function () {
    function FinalResumeComponent(driveservice, route) {
        this.driveservice = driveservice;
        this.route = route;
    }
    FinalResumeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.driveservice.getdataforresume().subscribe(function (student) {
            _this.student = student;
            console.log(student);
        }, function (err) { return console.log(err); });
        console.log("IM REACHED");
    };
    ;
    FinalResumeComponent.prototype.printDiv = function (printable) {
        console.log("ready to print");
        var restorepage = document.body.innerHTML;
        var printcontent = document.getElementById(printable).innerHTML;
        document.body.innerHTML = printcontent;
        window.print();
        document.body.innerHTML = restorepage;
    };
    return FinalResumeComponent;
}());
FinalResumeComponent = __decorate([
    core_1.Component({
        selector: 'final resume',
        templateUrl: 'app/public/html-templates/classic.html',
        styleUrls: ['app/public/css/classic.css'],
        providers: [drive_service_1.DriveService]
    }),
    __metadata("design:paramtypes", [drive_service_1.DriveService, router_1.Router])
], FinalResumeComponent);
exports.FinalResumeComponent = FinalResumeComponent;
//# sourceMappingURL=final-resume.component.js.map