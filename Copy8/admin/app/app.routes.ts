import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { notificationsComponent } from './notifications.component';
import { reportsComponent } from './reports.component';
import { settingsComponent } from './settings.component';
import { driveComponent } from './drive.component';
import { studentComponent } from './students.component';
import { UpdateCompanyProfileComponent } from './update-company-profile.component';
import { ProfileComponent } from './profile.component';
import { CompanyProfileComponent } from './company-profile.component';
import { PasswordRecoveryComponent } from './passwordRecovery.component';
import { FindMyAccountComponent } from './findMyAccount.component';
import { NewPasswordComponent } from './newPassword.component';
import { VerifyCodeComponent } from './verifyCode.component';
import { RegisterRequestComponent } from './register-request.component';

import { AuthGuard } from './auth.guard';

export const routes:Routes = [
    {
        path: '',
        component:HomeComponent,
        canActivate: [AuthGuard],
        children:[
            {
                path:'',
                component: notificationsComponent,
                canActivate: [AuthGuard] 
            },
            {
                path: 'home/drive',
                component: driveComponent,
                canActivate: [AuthGuard] 
            },
            {
                path: 'home/students',
                component: studentComponent,
                canActivate: [AuthGuard] 
            },
            {
                path: 'home/reports',
                component: reportsComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'home/settings',
                component: settingsComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'home/company/add/:id',
                component: UpdateCompanyProfileComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'home/students/view/:id',
                component: ProfileComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'home/company/add',
                component: CompanyProfileComponent,
                canActivate: [AuthGuard]
            },

        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'recover/:id',
        component: PasswordRecoveryComponent
    },
    {
        path: 'find',
        component: FindMyAccountComponent
    },
    {
        path: 'forgot/recover/create/new/password/:id',
        component: NewPasswordComponent
    },
    {
        path: 'verifyCode/:id',
        component: VerifyCodeComponent
    },
    {
        path: 'register/request',
        component: RegisterRequestComponent
    }
]