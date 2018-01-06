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
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var notifications_component_1 = require("./notifications.component");
var home_component_1 = require("./home.component");
var inner_menu_component_1 = require("./inner-menu.component");
var router_1 = require("@angular/router");
var profile_component_1 = require("./profile.component");
var settings_component_1 = require("./settings.component");
var drive_component_1 = require("./drive.component");
var http_1 = require("@angular/http");
var drive_service_1 = require("./drive.service");
var student_authentication_service_1 = require("./student-authentication.service");
var login_component_1 = require("./login.component");
var register_request_component_1 = require("./register-request.component");
var resume_styles_component_1 = require("./resume-styles.component");
var final_resume_component_1 = require("./final-resume.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    component: notifications_component_1.notificationsComponent
                },
                {
                    path: 'notify',
                    component: notifications_component_1.notificationsComponent
                },
                {
                    path: 'home',
                    component: home_component_1.homeComponent
                },
                {
                    path: 'home/drive',
                    component: drive_component_1.driveComponent
                },
                {
                    path: 'students/view',
                    component: profile_component_1.ProfileComponent
                },
                {
                    path: 'home/settings',
                    component: settings_component_1.settingsComponent
                },
                {
                    path: 'appHome/...',
                    component: app_component_1.AppComponent
                },
                {
                    path: 'login',
                    component: login_component_1.LoginComponent
                },
                {
                    path: 'register/request',
                    component: register_request_component_1.RegisterRequestComponent
                },
                {
                    path: 'resume/styles',
                    component: resume_styles_component_1.ResumeStylesComponent
                },
                {
                    path: 'final/resume',
                    component: final_resume_component_1.FinalResumeComponent
                }
            ])
        ],
        declarations: [
            resume_styles_component_1.ResumeStylesComponent,
            app_component_1.AppComponent,
            notifications_component_1.notificationsComponent,
            home_component_1.homeComponent,
            inner_menu_component_1.innermenuComponent,
            profile_component_1.ProfileComponent,
            settings_component_1.settingsComponent,
            drive_component_1.driveComponent,
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            register_request_component_1.RegisterRequestComponent,
            final_resume_component_1.FinalResumeComponent
        ],
        providers: [drive_service_1.DriveService, student_authentication_service_1.StudentAuthenticationService],
        bootstrap: [
            app_component_1.AppComponent,
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map