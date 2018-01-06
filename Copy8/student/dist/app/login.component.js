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
var router_1 = require("@angular/router");
var student_authentication_service_1 = require("./student-authentication.service");
var LoginComponent = (function () {
    function LoginComponent(service, route) {
        this.service = service;
        this.route = route;
        this.user = {};
        this.errormsg = '';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.user);
        this.service.login(this.user)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log("VALUE RECEIVED: " + response);
            if (response === null) {
                console.log("Navigating to login page");
                _this.route.navigate(['login']);
            }
            else {
                console.log(response._id);
                console.log(response);
                localStorage.setItem("user", response);
                console.log(localStorage.getItem("user"));
                localStorage.setItem("userid", response._id);
                console.log(localStorage.getItem("userid"));
                _this.route.navigate(['notify']);
            }
        }, function (err) {
            // console.log(user)
            console.log("ERROR: " + err);
        }, function () {
            //  console.log("tduy")
            console.log("COMPLETED");
        });
        //if(!this.service.login(this.user)){
        //this.errormsg='Login Failed'
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "login-form",
        styleUrls: ['app/public/css/login.component.css'],
        template: "\n    \n    <body>\n   \n    <div class=\"container\"> \n    <div class=\"row\">\n        <div class=\"col-sm-6\"></div>\n        <div class=\"col-sm-4\">\n            <div class=\"card lgbox\">\n            <div class=\"card-content\">\n                <form #f=\"ngForm\" ngSubmit=\"onClickLogin()\">\n                    <div class=\"input-field col s12\">\n                        <div class=\"form-group\">\n                            <div class=\"row\" style=\"padding:0px 20px;\">\n                                <input type=text name=\"userName\" [(ngModel)]=\"user.userName\" placeholder=\"Username\" class=\"form-control\" id=\"text_box\">\n                            </div>\n                        </div>\n                    </div>             \n                    <div class=\"input-field col s12\">\n                        <div class=\"form-group\">\n                            <div class=\"row\" style=\"padding:0px 20px;\">\n                                <input type=password name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Password\" class=\"form-control\" id=\"text_box\">\n                            </div>\n                        </div>\n                    </div>\n                    <span>{{errormsg}}</span>\n                    <div style=\" text-align:center;\">\n                    <button type=\"submit\"  class=\"btn waves-effect waves-light\" (click)=\"login()\" name=\"action\"\n                    style=\"width:200px; position:center;\">Login</button>\n                    </div>\n                </form>\n            </div>\n            <div class=\"card-footer\" style=\"text-align:center\">\n                <a routerLink=\"/register/request\"><p>Placement officer? click here to register</p></a>\n            </div>      \n            </div>\n        </div>\n    </div>\n</div>\n",
        providers: [student_authentication_service_1.StudentAuthenticationService]
    }),
    __metadata("design:paramtypes", [student_authentication_service_1.StudentAuthenticationService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map