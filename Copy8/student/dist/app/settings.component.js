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
var settingsComponent = (function () {
    function settingsComponent(driveService) {
        this.driveService = driveService;
        this.pass = {};
    }
    ;
    settingsComponent.prototype.onSubmitTemplateBased = function () {
        this.changePass(this.pass);
        console.log(this.pass);
    };
    settingsComponent.prototype.changePass = function (pass) {
        this.driveService.changePass(pass);
    };
    return settingsComponent;
}());
settingsComponent = __decorate([
    core_1.Component({
        selector: 'settings',
        styleUrls: ['app/public/css/settings.component.css'],
        template: "\n    <div class=\"container-fluid\">\n        <form>\n\t\t    <div class=\"card\">\n\t            <div class=\"card-header\" data-background-color=\"blue\">\n\t                <h4 class=\"title\">Settings</h4>\n\t\t\t\t    <p class=\"category\">Edit Settings</p>\n\t\t\t    </div>\n\t            <div class=\"card-content\">\n                    <button data-toggle=\"collapse\" data-target=\"#demo\">Change Password</button>\n                    <div id=\"demo\" class=\"collapse\">\n                        <form #f=\"ngForm\" (ngSubmit)=\"onSubmitTemplateBased()\">\n                            <br>\n                            <label>Current Password</label>\n                            <input type=\"text\"  class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"pass.currentPassword\" name = \"currentPassword\">\n                            <br>\n                            <label>New Password</label>\n                            <input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"pass.newPassword\" name = \"newPassword\" >\n                            <br>\n                            <label>Confirm Password</label>\n                            <input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"pass.confirmPassword\" name = \"confirmPassword\" >\n                            <br>\n                            <button type=\"submit\">Submit</button>\n                        </form>\n                    </div>\n                </div>\n            </div> \n        </form>\n    </div>\n    ",
        providers: [drive_service_1.DriveService]
    }),
    __metadata("design:paramtypes", [drive_service_1.DriveService])
], settingsComponent);
exports.settingsComponent = settingsComponent;
//# sourceMappingURL=settings.component.js.map