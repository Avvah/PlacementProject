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
var AppComponent = (function () {
    function AppComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    AppComponent.prototype.checkCredential = function () {
        if (localStorage.getItem("userid") === null) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.service.checkCredentials();
        if (!this.service.checkCredentials()) {
            console.log("Entered app crendtials");
            this.route.navigate(['login']);
        }
    };
    AppComponent.prototype.logout = function () {
        this.service.logout();
        if (this.service.logout()) {
            console.log(":)");
            this.route.navigate(['login']);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styleUrls: ['app/public/css/app.component.css'],
        template: "\n\t\n    <div class=\"wrapper\">\n        <div *ngIf=\"!checkCredential()\" class=\"sidebar\" data-color=\"blue\" data-image=\"../assets/img/sidebar-1.jpg\">\n            <div class=\"logo\">\n                <a href=\"\" class=\"simple-text\">\n                    Placement.guru\n                </a>\n            </div>\n            <div class=\"sidebar-wrapper\" >\n                <inner-menu></inner-menu>\n            </div>\n        </div>\n        <div class=\"main-panel\" >\n\t\t\t<nav class=\"navbar navbar-transparent navbar-absolute\">\n\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\n\t\t\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<a *ngIf=\"!checkCredential()\" class=\"navbar-brand\" href=\"#\">Dashboard</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"!checkCredential()\" class=\"collapse navbar-collapse\">\n\t\t\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">dashboard</i>\n\t\t\t\t\t\t\t\t\t<p class=\"hidden-lg hidden-md\">Dashboard</p>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">notifications</i>\n\t\t\t\t\t\t\t\t\t<span class=\"notification\">5</span>\n\t\t\t\t\t\t\t\t\t<p class=\"hidden-lg hidden-md\">Notifications</p>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Mike John responded to your email</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\">You have 5 new tasks</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\">You're now friend with Andrew</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Another Notification</a></li>\n\t\t\t\t\t\t\t\t\t<li (click)=\"logout()\"><a [routerLink]=\"['login']\">Logout</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n\t \t\t\t\t\t\t\t   <i class=\"material-icons\">person</i>\n\t \t\t\t\t\t\t\t   <p class=\"hidden-lg hidden-md\">Profile</p>\n\t\t \t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t<form class=\"navbar-form navbar-right\" role=\"search\">\n\t\t\t\t\t\t\t<div class=\"form-group  is-empty\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n\t\t\t\t\t\t\t\t<span class=\"material-input\"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n\t\t\t\t\t\t\t\t<i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</nav>\n            <div class=\"content\">\n                <router-outlet></router-outlet>           \n            </div>\n\t\t\t\n        </div>\n\t\t\n</div>\n\n    ",
        providers: [student_authentication_service_1.StudentAuthenticationService]
    }),
    __metadata("design:paramtypes", [student_authentication_service_1.StudentAuthenticationService, router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map