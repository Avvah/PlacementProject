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
var authentication_service_1 = require('./authentication.service');
var RegisterRequestComponent = (function () {
    function RegisterRequestComponent(service) {
        this.service = service;
        this.register = {};
    }
    RegisterRequestComponent.prototype.submit = function () {
        console.log(this.register);
        this.service.sendRequest(this.register);
    };
    RegisterRequestComponent = __decorate([
        core_1.Component({
            selector: 'request-register',
            template: "<div class=main>\n            \n            <div class=\"form-body\" style=\"margin-left:120px\">\n                <div class=\"header\">\n                <header>\n                    <h1>Request Form</h1>\n                </header>\n            </div>\n                    <form #f=\"ngForm\" (ngSubmit)=\"onRegister()\">\n                        <div class=\"row\">\n                        <div class=\"col-sm-8\">\n                        <div class=\"form-group\">\n                        <label class=\"control-label\">Name</label>\n                        <input type=\"text\" [(ngModel)]=\"register.name\" name=\"name\" class=\"form-control\">\n                        </div>\n                        </div>\n                        \n                        </div>\n\n                        <div class=\"row\">\n\n                        <div class=\"col-sm-4\">\n                        <div class=\"form-group\">\n                            <label class=\"control-label\">Email Id:</label>\n                            <input type=\"text\" [(ngModel)]=\"register.mail\" name=\"mail\" class=\"form-control\">\n                        </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                        <div class=\"form-group\">\n                        <label>Contact Number:</label>\n                        <input type=\"text\" [(ngModel)]=\"register.contact\" name=\"contact\" class=\"form-control\">\n                        </div>\n                        </div>\n                        </div>\n                        \n                        <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                        <div class=\"form-group\">\n                        <label>City:</label>\n                        <input type=\"text\" [(ngModel)]=\"register.city\" name=\"city\" class=\"form-control\">\n                        </div>\n                        </div>\n                        </div>\n                                               \n                        <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                        <div class=\"form-group\">\n                        <label>Institution:</label>\n                        <input type=\"text\" [(ngModel)]=\"register.institution\" name=\"institution\" class=\"form-control\">\n                        </div>\n                        </div>\n                        </div>\n                        \n                        <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                        <div class=\"form-group\">\n                        <label>Any Questions?</label>\n                        <input type=\"text-area\" [(ngModel)]=\"register.quest\" name=\"quest\" class=\"form-control\">\n                        </div>\n                        </div>\n                        </div>\n                        \n                        <button class=\"btn btn-default\" type=\"submit\" (click)=\"submit()\">Send Request</button>\n                    </form>\n            </div>\n        </div>"
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
    ], RegisterRequestComponent);
    return RegisterRequestComponent;
}());
exports.RegisterRequestComponent = RegisterRequestComponent;
//# sourceMappingURL=register-request.component.js.map