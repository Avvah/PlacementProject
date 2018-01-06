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
var router_1 = require('@angular/router');
var ResumeStylesComponent = (function () {
    function ResumeStylesComponent(router) {
        this.router = router;
    }
    ResumeStylesComponent.prototype.loadResume = function () {
        this.router.navigate(['final/resume']);
        console.log("clicked");
    };
    ResumeStylesComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("userid") === null) {
            console.log("ummmm");
            this.router.navigate(['login']);
        }
    };
    ResumeStylesComponent = __decorate([
        core_1.Component({
            selector: 'resume',
            styleUrls: ['app/public/css/resume.component.css'],
            template: "<div class=\"container-fluid\">\n    <div class=\"card\">\n    <h4 class=\"text-center\"> Standard Resume </h4>\n    <button type=\"button\" class=\"btn btn-info btn-sm\"(click)=\"loadResume()\">Select style\n    </button>\n    </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ResumeStylesComponent);
    return ResumeStylesComponent;
}());
exports.ResumeStylesComponent = ResumeStylesComponent;
//# sourceMappingURL=resume-styles.component.js.map