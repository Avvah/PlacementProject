import { Component } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import { Router, RouterOutlet } from '@angular/router';
import { DriveService } from './drive.service';
import {Observable} from 'rxjs/Rx';
import {AuthGuard} from './auth.guard';

@Component({
    selector: 'my-app',
    styleUrls: ['app/public/css/app.component.css'],
    templateUrl:'app/public/htmlTemplates/app.component.html',
	providers:[DriveService]
})

export class AppComponent{

    constructor(private service:AuthenticationService)
    {
        // console.log("App started");
        // this.service.logFlag(2);
    }

    

}