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
var student_authentication_service_1 = require('./student-authentication.service');
var innermenuComponent = (function () {
    function innermenuComponent(service) {
        this.service = service;
        this.menuitems = [
            { "name": "Placement Drive", "url": "home/drive", "status": "" },
            { "name": "My Profile", "url": "students/view", "status": "" },
            { "name": "Resume", "url": "resume/styles", "status": "" }
        ];
    }
    innermenuComponent = __decorate([
        core_1.Component({
            selector: "inner-menu",
            styleUrls: ['app/public/css/inner-menu.component.css'],
            template: "\n    <ul class=\"nav\">\n        <li class=\"{{menuitem.status}}\" *ngFor=\"let menuitem of menuitems\">\n            <a routerLink=\"/{{menuitem.url}}\">\n                <i class=\"material-icons\">{{menuitem.ico}}</i>\n                <p>{{menuitem.name}}</p>\n            </a>\n        </li>\n    </ul>  \n    "
        }), 
        __metadata('design:paramtypes', [student_authentication_service_1.StudentAuthenticationService])
    ], innermenuComponent);
    return innermenuComponent;
}());
exports.innermenuComponent = innermenuComponent;
//# sourceMappingURL=inner-menu.component.js.map