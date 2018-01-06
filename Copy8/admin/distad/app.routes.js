"use strict";
var home_component_1 = require('./home.component');
var login_component_1 = require('./login.component');
var notifications_component_1 = require('./notifications.component');
var reports_component_1 = require('./reports.component');
var settings_component_1 = require('./settings.component');
var drive_component_1 = require('./drive.component');
var students_component_1 = require('./students.component');
var update_company_profile_component_1 = require('./update-company-profile.component');
var profile_component_1 = require('./profile.component');
var company_profile_component_1 = require('./company-profile.component');
var passwordRecovery_component_1 = require('./passwordRecovery.component');
var findMyAccount_component_1 = require('./findMyAccount.component');
var newPassword_component_1 = require('./newPassword.component');
var verifyCode_component_1 = require('./verifyCode.component');
var register_request_component_1 = require('./register-request.component');
var auth_guard_1 = require('./auth.guard');
exports.routes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            {
                path: '',
                component: notifications_component_1.notificationsComponent,
                canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: 'home/drive',
                component: drive_component_1.driveComponent,
                canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: 'home/students',
                component: students_component_1.studentComponent,
                canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: 'home/reports',
                component: reports_component_1.reportsComponent,
                canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: 'home/settings',
                component: settings_component_1.settingsComponent,
                canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: 'home/company/add/:id',
                component: update_company_profile_component_1.UpdateCompanyProfileComponent,
                canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: 'home/students/view/:id',
                component: profile_component_1.ProfileComponent,
                canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: 'home/company/add',
                component: company_profile_component_1.CompanyProfileComponent,
                canActivate: [auth_guard_1.AuthGuard]
            },
        ]
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'recover/:id',
        component: passwordRecovery_component_1.PasswordRecoveryComponent
    },
    {
        path: 'find',
        component: findMyAccount_component_1.FindMyAccountComponent
    },
    {
        path: 'forgot/recover/create/new/password/:id',
        component: newPassword_component_1.NewPasswordComponent
    },
    {
        path: 'verifyCode/:id',
        component: verifyCode_component_1.VerifyCodeComponent
    },
    {
        path: 'register/request',
        component: register_request_component_1.RegisterRequestComponent
    }
];
//# sourceMappingURL=app.routes.js.map