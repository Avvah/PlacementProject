import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { notificationsComponent } from './notifications.component';
import { settingsComponent } from './settings.component';
import { driveComponent } from './drive.component';
import { ProfileComponent } from './profile.component';
import { ResumeStylesComponent } from'./resume-styles.component';
import { FinalResumeComponent } from './final-resume.component';

export const routes:Routes = [
    {
        path: '',
        component:HomeComponent,
        children:[
            {
                path:'',
                component: notificationsComponent
            },
            {
                path: 'home/drive',
                component: driveComponent
            },
            {
                path: 'students/view',
                component: ProfileComponent
            },
            {
                path:'resume/styles',
                component:ResumeStylesComponent
            },
            {
                path:'final/resume',
                component: FinalResumeComponent
            },
            {
                path: 'home/settings',
                component: settingsComponent
            },

        ]
    },
    {
        path: 'login',
        component: LoginComponent
    }
]