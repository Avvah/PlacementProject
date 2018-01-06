import { Component, ElementRef } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, RouterOutlet } from '@angular/router';
import { DriveService } from './drive.service';
import { Http, Response, Request, Headers, RequestMethod, RequestOptions } from'@angular/http';


@Component({
    selector: 'find-user',
    styleUrls: ['app/public/css/findMyAccount.component.css'],
    templateUrl:'app/public/htmlTemplates/findMyAccount.component.html',
	providers:[]
})

export class FindMyAccountComponent{
    find:Object={};
    found:Object={};
    constructor(private driveService:DriveService, private route:Router)
    {
        this.driveService.foundEvent.subscribe(data =>
        {
            this.found = data;
        });
    }

    save(isValid, f) 
    {
        var findAccount = (<HTMLInputElement>document.getElementById('account')).value;
        var errorStatus = document.getElementById('errorStatus');
        console.log(f);
        console.log(this.find);
        this.driveService.sendFindRequest(this.find)
        .subscribe(
        (res) => 
        {
            this.found = res;
            console.log("VALUE RECEIVED: "+res);
            if(this.found!=null)
            {
                console.log(findAccount);
                this.route.navigate(['recover',findAccount]);
            }
          
        },
        (err) => 
        {
            console.log(this.found);
            console.log("ERROR: "+err);
        },
        () => 
        {
            console.log("COMPLETED");
        }
        );
    }

}