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
var mainmenuComponent = (function () {
    function mainmenuComponent() {
        this.menuitems = [
            { "icon": "Aad", "name": "Placement Drive", "url": "home/drive" },
            { "icon": "Aad", "name": "Students", "url": "home/students" },
            { "icon": "Aad", "name": "Companies", "url": "home/companies" },
            { "icon": "Aad", "name": "Student Portal", "url": "home/portal" },
            { "icon": "Aad", "name": "Reports", "url": "home/reports" },
            { "icon": "Aad", "name": "Settings", "url": "home/settings" }
        ];
    }
    mainmenuComponent = __decorate([
        core_1.Component({
            selector: "main-menu",
            styleUrls: ['app/public/css/main-menu.component.css'],
            template: "\n    <div class=\"container\">\n        <div class=\"row\">\n    <div class=\"col-md-8 main-menu\">\n                <div class=\"row\">\n                    <a *ngFor=\"let menuitem of menuitems\" routerLink=\"/{{menuitem.url}}\">\n                    <div class=\"col-md-4 main-menu-item\">\n                    <h4 class=\"menu-item\">{{menuitem.name}}</h4>\n                    </div>\n                    </a>\n                </div>\n            </div>\n            <notifications>loading notifications..</notifications>\n            </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], mainmenuComponent);
    return mainmenuComponent;
}());
exports.mainmenuComponent = mainmenuComponent;
//# sourceMappingURL=main-menu.component.js.map