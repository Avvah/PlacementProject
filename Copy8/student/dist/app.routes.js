"use strict";
var home_component_1 = require('./home.component');
var login_component_1 = require('./login.component');
var notifications_component_1 = require('./notifications.component');
var settings_component_1 = require('./settings.component');
var drive_component_1 = require('./drive.component');
var profile_component_1 = require('./profile.component');
var resume_styles_component_1 = require('./resume-styles.component');
var final_resume_component_1 = require('./final-resume.component');
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
                path: 'students/view',
                component: profile_component_1.ProfileComponent
            },
            {
                path: 'resume/styles',
                component: resume_styles_component_1.ResumeStylesComponent
            },
            {
                path: 'final/resume',
                component: final_resume_component_1.FinalResumeComponent
            },
            {
                path: 'home/settings',
                component: settings_component_1.settingsComponent
            },
        ]
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    }
];
//# sourceMappingURL=app.routes.js.map