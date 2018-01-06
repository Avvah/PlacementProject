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
exports.routes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        children: [
            {
                path: '',
                component: notifications_component_1.notificationsComponent
            },
            {
                path: 'home/drive',
                component: drive_component_1.driveComponent
            },
            {
                path: 'home/students',
                component: students_component_1.studentComponent
            },
            {
                path: 'home/reports',
                component: reports_component_1.reportsComponent
            },
            {
                path: 'home/settings',
                component: settings_component_1.settingsComponent
            },
            {
                path: 'home/company/add/:id',
                component: update_company_profile_component_1.UpdateCompanyProfileComponent
            },
            {
                path: 'home/students/view/:id',
                component: profile_component_1.ProfileComponent
            },
            {
                path: 'home/company/add',
                component: company_profile_component_1.CompanyProfileComponent
            },
        ]
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    }
];
//# sourceMappingURL=app.routes.js.map