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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var angular2_toaster_1 = require('angular2-toaster/angular2-toaster');
var searchpipe_1 = require('./searchpipe');
// import { RlTagInputModule } from 'angular2-tag-input';
var ng2_file_upload_1 = require('ng2-file-upload');
var angular2_jwt_1 = require('angular2-jwt');
var auth_guard_1 = require('./auth.guard');
var app_component_1 = require('./app.component');
var notifications_component_1 = require('./notifications.component');
var inner_menu_component_1 = require('./inner-menu.component');
var students_component_1 = require('./students.component');
var profile_component_1 = require('./profile.component');
var reports_component_1 = require('./reports.component');
var settings_component_1 = require('./settings.component');
var drive_component_1 = require('./drive.component');
var company_profile_component_1 = require('./company-profile.component');
var login_component_1 = require('./login.component');
var register_request_component_1 = require('./register-request.component');
// import { DummyComponent } from './dummy.component';
var update_company_profile_component_1 = require('./update-company-profile.component');
var home_component_1 = require('./home.component');
var passwordRecovery_component_1 = require('./passwordRecovery.component');
var findMyAccount_component_1 = require('./findMyAccount.component');
var newPassword_component_1 = require('./newPassword.component');
var verifyCode_component_1 = require('./verifyCode.component');
var drive_service_1 = require('./drive.service');
var authentication_service_1 = require('./authentication.service');
var app_routes_1 = require('./app.routes');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                angular2_toaster_1.ToasterModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                //  RlTagInputModule,
                router_1.RouterModule.forRoot(app_routes_1.routes, {
                    useHash: true
                })
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                notifications_component_1.notificationsComponent,
                update_company_profile_component_1.UpdateCompanyProfileComponent,
                students_component_1.studentComponent,
                inner_menu_component_1.innermenuComponent,
                profile_component_1.ProfileComponent,
                reports_component_1.reportsComponent,
                settings_component_1.settingsComponent,
                drive_component_1.driveComponent,
                company_profile_component_1.CompanyProfileComponent,
                passwordRecovery_component_1.PasswordRecoveryComponent,
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                ng2_file_upload_1.FileSelectDirective,
                register_request_component_1.RegisterRequestComponent,
                searchpipe_1.SearchPipe,
                // DummyComponent,
                findMyAccount_component_1.FindMyAccountComponent,
                newPassword_component_1.NewPasswordComponent,
                verifyCode_component_1.VerifyCodeComponent
            ],
            providers: [drive_service_1.DriveService, authentication_service_1.AuthenticationService, auth_guard_1.AuthGuard].concat(angular2_jwt_1.AUTH_PROVIDERS),
            bootstrap: [
                app_component_1.AppComponent,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map