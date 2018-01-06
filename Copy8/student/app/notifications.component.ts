import { Component, OnInit } from '@angular/core';
import {StudentAuthenticationService} from './student-authentication.service';
import {Router} from '@angular/router';

@Component({
    selector:'notifications',
    styleUrls: [ 'app/public/css/notifications.component.css' ],
    templateUrl:'app/public/html-templates/notifications.component.html',
    providers:[StudentAuthenticationService]
})

export class notificationsComponent{

    constructor(private service:StudentAuthenticationService, private route:Router){}
    notifications:Array<String> = [
        "This is notification 1",
        "Ok.So what should i do? I am notification 2 with eaual importance.you understand?"
        ];
    ngOnInit(){
        if(localStorage.getItem("userid")===null){
            console.log("ummmm")
            this.route.navigate(['login']);
        }
    }
}