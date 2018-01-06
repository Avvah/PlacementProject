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
var student_authentication_service_1 = require("./student-authentication.service");
var router_1 = require("@angular/router");
var notificationsComponent = (function () {
    function notificationsComponent(service, route) {
        this.service = service;
        this.route = route;
        this.notifications = [
            "This is notification 1",
            "Ok.So what should i do? I am notification 2 with eaual importance.you understand?"
        ];
    }
    notificationsComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("userid") === null) {
            console.log("ummmm");
            this.route.navigate(['login']);
        }
    };
    return notificationsComponent;
}());
notificationsComponent = __decorate([
    core_1.Component({
        selector: 'notifications',
        styleUrls: ['app/public/css/notifications.component.css'],
        template: "\n    <div class=\"col-md-9\">\n    <ul>\n        <li class=\"notification-head\">Notifications</li>\n        <li *ngFor=\"let notification of notifications\" class=\"notification-item\">{{notification}}</li>\n    </ul>\n    </div>   \n    ",
        providers: [student_authentication_service_1.StudentAuthenticationService]
    }),
    __metadata("design:paramtypes", [student_authentication_service_1.StudentAuthenticationService, router_1.Router])
], notificationsComponent);
exports.notificationsComponent = notificationsComponent;
//# sourceMappingURL=notifications.component.js.map