import { Component, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DriveService } from './drive.service';
import { AuthenticationService } from './authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthHttp, JwtHelper  } from 'angular2-jwt';

@Component({
    selector:'settings',
    styleUrls:['app/public/css/settings.component.css'],
    templateUrl:'app/public/htmlTemplates/settings.component.html',
    providers: [DriveService]
})

export class settingsComponent
{
    constructor(private driveService: DriveService,private authservice:AuthenticationService,
                private route: ActivatedRoute, public authHttp: AuthHttp)
    {
        
    };

    aid=localStorage.getItem("userid");
	pass: Object={id:this.aid};
	
    onSubmitTemplateBased()
    {
        var matchPassword = document.getElementById('matchPassword');
        var newPassword = (<HTMLInputElement>document.getElementById('newPassword')).value;
        var confirmPassword = (<HTMLInputElement>document.getElementById('confirmPassword')).value;
        if(newPassword != confirmPassword )
        {
            matchPassword.innerText = "Password do not match";
        }
        else
        {
            matchPassword.innerText = "";
            console.log(this.pass);
        
		    this.changePass(this.pass)
        }  
	}

    // ngOnInit(){
    //     this.authservice.checkCredentials();
    // }

	changePass(pass)
    {
		this.driveService.changePass(pass)
        .subscribe(
            (response) => 
            {
                console.log("VALUE RECEIVED: "+response);
                var currentPassword = document.getElementById('currentPassword');
                var currentPasswordMatch = document.getElementById('currentPasswordMatch');
                if(response == null)
                {
                        currentPasswordMatch.innerText = "Your Password was incorrect.";
                }
                else
                {
                    currentPasswordMatch.innerText = "";
                }    
            },
            (err) => 
            {
                console.log("ERROR: "+err);
            },
            () => 
            {
                console.log("COMPLETED");
            }
        );
	}
   
}