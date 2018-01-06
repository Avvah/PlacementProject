import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { AuthHttp, JwtHelper  } from 'angular2-jwt';

@Component({
    selector:'reports',
    styleUrls:['app/public/css/reports.component.css'],
    templateUrl:'app/public/htmlTemplates/reports.component.html'
})

export class reportsComponent
{
    constructor(private authservice:AuthenticationService, public authHttp: AuthHttp)
    {

    }

    // ngOnInit(){
    //     this.authservice.checkCredentials();
    // }

}