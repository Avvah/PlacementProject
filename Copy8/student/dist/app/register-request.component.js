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
var RegisterRequestComponent = (function () {
    function RegisterRequestComponent() {
        this.register = {};
    }
    return RegisterRequestComponent;
}());
RegisterRequestComponent = __decorate([
    core_1.Component({
        selector: 'request-register',
        template: "\n        <div class=main>\n            <div class=\"header\">\n                <header>\n                    <h1>Request Form</h1>\n                </header>\n            </div>\n            <div class=\"form-body\">\n                <form #f=\"ngForm\" (ngSubmit)=\"onRegister()\">\n                    <div class=\"row\">\n                    <label>Name:</label>\n                    <input type=\"text\" [(ngModel)]=\"register.name\" name=\"name\">\n                    <br>\n                    <br>\n                    Email Id:<input type=\"text\" [(ngModel)]=\"register.mail\" name=\"mail\">\n                    <br>\n                    <br>\n                    Contact Number:<input type=\"text\" [(ngModel)]=\"register.contact\" name=\"contact\">\n                    <br>\n                    <br>\n                    City:<input type=\"text\" [(ngModel)]=\"register.city\" name=\"city\">\n                    <br>\n                    <br>\n                    Institution:<input type=\"text\" [(ngModel)]=\"register.institution\" name=\"institution\">\n                    <br>\n                    <br>\n                    Any Questions?<input type=\"text-area\" [(ngModel)]=\"register.quest\" name=\"quest\">\n                    <br>\n                    <br>\n                    <br>\n                    <button type=\"submit\" (click)=\"submit()\">Send Request</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n        "
    }),
    __metadata("design:paramtypes", [])
], RegisterRequestComponent);
exports.RegisterRequestComponent = RegisterRequestComponent;
//# sourceMappingURL=register-request.component.js.map