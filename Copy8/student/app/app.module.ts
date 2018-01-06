import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {notificationsComponent} from './notifications.component'
import {HomeComponent} from './home.component'
import {innermenuComponent} from './inner-menu.component'
import { RouterModule }   from '@angular/router';
import {ProfileComponent} from './profile.component';
import {settingsComponent} from './settings.component';
import {driveComponent} from './drive.component';
import {HttpModule, JsonpModule, Http} from '@angular/http';
import {DriveService} from './drive.service';
import {StudentAuthenticationService} from './student-authentication.service';
import {LoginComponent} from './login.component';
import {RegisterRequestComponent} from './register-request.component';
import{ResumeStylesComponent} from'./resume-styles.component';
import {FinalResumeComponent} from './final-resume.component';
import {ToasterModule, ToasterService } from 'angular2-toaster/angular2-toaster';
import { routes } from './app.routes';
// import { StudentProfileArrayType} from './studentprofile-array-type';


@NgModule({
    imports: [

         BrowserModule,
         FormsModule,
         ReactiveFormsModule,
         HttpModule,
         JsonpModule,
         ToasterModule,
         RouterModule.forRoot(routes) 
        ],
        declarations: [
           
            ResumeStylesComponent,
            AppComponent,
            notificationsComponent,
            HomeComponent,
            innermenuComponent,
            ProfileComponent,
            settingsComponent,
            driveComponent,
            AppComponent,            
            LoginComponent,
            RegisterRequestComponent,
            FinalResumeComponent,
            // StudentProfileArrayType
            ],
            providers:[DriveService, StudentAuthenticationService],
        bootstrap: [
                AppComponent,
            ]
})

export class AppModule{

}