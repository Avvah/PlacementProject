import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, RouterOutlet, ActivatedRoute } from '@angular/router';
import { DriveService } from './drive.service';
import { Http, Response, Request, Headers, RequestMethod, RequestOptions} from'@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'recover-user',
    styleUrls: ['app/public/css/passwordRecovery.component.css'],
    templateUrl:'app/public/htmlTemplates/passwordRecovery.component.html',
	providers:[DriveService]
})

export class PasswordRecoveryComponent implements OnInit
{
    public reset:ResetType;
    found:Object={};
    femail;
    fphoneNumber;
    id: String;

    constructor(private driveService:DriveService,private activatedRoute: ActivatedRoute,private route:Router)
    {
        this.id=activatedRoute.snapshot.params['id'];
	    // console.log(this.id);
    }

    find_id=this.activatedRoute.snapshot.params['id'];
    find:Object={account:this.find_id}

    ngOnInit()
    {
        this.reset = {recover:this.recovers[0].value}
        this.driveService.sendFindRequestAgain(this.find)
        .subscribe((res)=>
        {
            this.found = res;
            this.femail = res.email;
            this.fphoneNumber = res.phoneNumber;
            // console.log(res.phoneNumber);
        });
    }

    public recovers = [
        { value:'email', display:'Email me a link to reset my password'},
        { value:'phone', display:'Text me a code to reset my password'}
    ];

    save() 
    {
        // console.log(this.reset);
        // console.log(this.femail);
        // console.log(this.reset.recover);
        if(this.reset.recover === "email")
        {
            this.driveService.sendRecoverRequest(this.reset, this.femail)
            .subscribe(
                (response) => {
                console.log("VALUE RECEIVED: "+response);
                if(response === "Email Sent")
                {
                    var linkSent = document.getElementById('linkSent');
                    var onlinksent = document.getElementById('onlinksent');
                    linkSent.innerText = "To reset your password, click on the link sent to your mail associated with this account.";
                    onlinksent.innerHTML = '<a href="/login"><button type="submit" > Ok </button></a>'
                }
                },
                (err) => 
                {
                    //console.log(resetType);
                    console.log("ERROR: "+err);
                },
                () => 
                {
                    console.log("COMPLETED");
                }
            );
            console.log(this.femail);
        }
        else
        {
            if(this.reset.recover === "phone")
            {
                this.driveService.sendRecoverRequest(this.reset, this.fphoneNumber)
                .subscribe(
                    (response) => 
                    {
                        console.log("VALUE RECEIVED: "+response);
                        if(response === "Message Sent")
                        {
                            this.route.navigate(['verifyCode',this.find_id]);
                        }
                    },
                    (err) => 
                    {
                        //console.log(resetType);
                        console.log("ERROR: "+err);
                    },
                    () => 
                    {
                        console.log("COMPLETED");
                    }
                );
                console.log(this.fphoneNumber);
            } 
        }           
    }

}

export interface ResetType 
{
    recover?: string; // radio
}

export interface Theme 
{
    display: string;
    backgroundColor: string;
    fontColor: string;
}
