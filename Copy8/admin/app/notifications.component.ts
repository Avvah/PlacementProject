import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { AuthHttp, JwtHelper  } from 'angular2-jwt';

@Component({
    selector:'notifications',
    styleUrls: [ 'app/public/css/notifications.component.css' ],
    templateUrl: 'app/public/htmlTemplates/notifications.component.html',
    providers:[AuthenticationService]
})

export class notificationsComponent
{
    constructor(private authservice:AuthenticationService, private route:Router, public authHttp: AuthHttp)
    {
      
    }

    // ngOnInit(){
    //      if(!this.authservice.checkCredentials()){
    //         this.route.navigate(['login']);
    //     }
    // }
    
    notifications:Array<String> = [
        "This is notification 1",
        "Ok.So what should i do? I am notification 2 with eaual importance.you understand?"
    ];
    
}