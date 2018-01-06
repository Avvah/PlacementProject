import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule, JsonpModule, Http } from '@angular/http';

import { ToasterModule, ToasterService } from 'angular2-toaster/angular2-toaster';
import { SearchPipe } from './searchpipe';
// import { RlTagInputModule } from 'angular2-tag-input';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { notificationsComponent } from './notifications.component';
import { innermenuComponent } from './inner-menu.component';
import { studentComponent } from './students.component';
import { ProfileComponent } from './profile.component';
import { reportsComponent } from './reports.component';
import { settingsComponent } from './settings.component';
import { driveComponent } from './drive.component';
import { CompanyProfileComponent } from './company-profile.component';
import { LoginComponent } from './login.component';
import { RegisterRequestComponent } from './register-request.component';
// import { DummyComponent } from './dummy.component';
import { UpdateCompanyProfileComponent } from './update-company-profile.component';
import { HomeComponent } from './home.component';
import { PasswordRecoveryComponent } from './passwordRecovery.component';
import { FindMyAccountComponent } from './findMyAccount.component';
import { NewPasswordComponent } from './newPassword.component';
import { VerifyCodeComponent } from './verifyCode.component';

import { DriveService } from './drive.service';
import { AuthenticationService } from './authentication.service';

import { routes } from './app.routes';

@NgModule({
    imports: [
         ToasterModule,
         BrowserModule,
         FormsModule,
         ReactiveFormsModule,
         HttpModule,
         JsonpModule,
        //  RlTagInputModule,
         RouterModule.forRoot(routes,{
              useHash: true
         }) 
        ],
        declarations: [
            AppComponent,
            HomeComponent,
            notificationsComponent,
            UpdateCompanyProfileComponent,
            studentComponent,
            innermenuComponent,
            ProfileComponent,
            reportsComponent,
            settingsComponent,
            driveComponent,
            CompanyProfileComponent,
            PasswordRecoveryComponent,
            AppComponent,            
            LoginComponent,
            FileSelectDirective,
            RegisterRequestComponent,
            SearchPipe,
            // DummyComponent,
            FindMyAccountComponent,
            NewPasswordComponent,
            VerifyCodeComponent
            ],
            providers:[DriveService,
            AuthenticationService,
            AuthGuard,...AUTH_PROVIDERS
            ],
        bootstrap: [
                AppComponent,
            ]
})

export class AppModule{

}