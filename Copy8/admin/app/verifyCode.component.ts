import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, RouterOutlet, ActivatedRoute } from '@angular/router';
import { DriveService } from './drive.service';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    styleUrls: ['app/public/css/VerifyCode.component.css'],
    templateUrl:'app/public/htmlTemplates/VerifyCode.component.html',
	providers:[DriveService]
})

export class VerifyCodeComponent
{
    id: String;
    
    constructor(private driveService:DriveService, private activatedRoute: ActivatedRoute, private route:Router)
    {
        this.id=activatedRoute.snapshot.params['id'];
	    console.log(this.id);
    }
    
    v_id=this.activatedRoute.snapshot.params['id'];
    vcode:Object={who:this.v_id};

    onVerify(passid)
    {
        var passid = passid;
        console.log("In onVerify()"+passid);
        this.driveService.checkForVerificationCode(this.vcode)
        .subscribe(
            (response) => 
            {
                console.log("VALUE RECEIVED: "+response);
                if(response === "Correct")
                {
                    this.route.navigate(['forgot/recover/create/new/password',passid])
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