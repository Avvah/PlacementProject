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
var reportsComponent = (function () {
    function reportsComponent(authservice) {
        this.authservice = authservice;
    }
    reportsComponent.prototype.ngOnInit = function () {
        this.authservice.checkCredentials();
    };
    reportsComponent = __decorate([
        core_1.Component({
            selector: 'reports',
            styleUrls: ['app/public/css/reports.component.css'],
            template: "\n    <div class=\"col-md-9\">\n    <h1>Reports</h1>\n    <p> No Reports Have Been Generated Yet.</p>\n    <p> Reports Will be generated once the drive starts.</p>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
    ], reportsComponent);
    return reportsComponent;
}());
exports.reportsComponent = reportsComponent;
//# sourceMappingURL=reports.component.js.map