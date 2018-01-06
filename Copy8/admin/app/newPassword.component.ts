import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { DriveService } from './drive.service';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    styleUrls: ['app/public/css/newPassword.component.css'],
    templateUrl:'app/public/htmlTemplates/newPassword.component.html',
	providers:[]
})

export class NewPasswordComponent
{
    id:string;
    
	constructor(private driveService: DriveService, private router: ActivatedRoute)
    {
        this.id=router.snapshot.params['id'];
		console.log(this.id);
    };

    nid=this.router.snapshot.params['id'];
    pass:Object={vcode:this.nid}

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

    changePass(pass)
    {
		this.driveService.changetoNewPass(pass)
        .subscribe(
            (response) => 
            {
            console.log("VALUE RECEIVED: "+response);
            var onPasswordChange = document.getElementById('onPasswordChange');
            onPasswordChange.innerHTML = '<h4>Your Password Has Been Changed.</h4><br><a href="/login"><button>Go To Login PAge</button></a>'
            
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