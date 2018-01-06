import {Component, ElementRef, OnInit} from '@angular/core'
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {AuthGuard} from './auth.guard';

declare var $:any;

@Component({
    selector: "login-form",
    styleUrls:['app/public/css/login.component.css'],
    templateUrl: 'app/public/htmlTemplates/login.component.html',
    providers:[AuthenticationService]
})

export class LoginComponent
{
    register:Object={};
    user: Object ={};
    public errormsg = '';
    
    constructor(private service:AuthenticationService, private route:Router, private authguard:AuthGuard)
    {

    }
    
    ngOnInit()
    {
        localStorage.removeItem("userid");
        console.log("Flag"+this.authguard.logFlag);
    }

    login()
    {
        console.log(this.user);
        this.service.login(this.user)
        .map((res)=>res.json())
        .subscribe(
        (response) =>
        {
           console.log("VALUE RECEIVED: "+response);
           
           if(response===null)
           {
               console.log("Navigating to login page");
               this.route.navigate(['login']);
               $('#myModal').modal('show');

           }
           else
           {
               console.log(response._id);
               this.authguard.logFlag = 1;
               
               //Assigning logFlag value in server
               this.service.logFlag(1)
               .map((res)=>res.json())
                .subscribe(
                (response) => 
                {
                    console.log("VALUE RECEIVED: "+response);
                    console.log("Particular Data")
                    this.authguard.logFlag = response;
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
               console.log("FlagN"+this.authguard.logFlag);
               localStorage.setItem("userid",response._id);
               console.log(localStorage);
               this.route.navigate(['']);
           }
        },
        (err) => 
        {
            // console.log(user)
            console.log("ERROR: "+err);
        },
        () => 
        {
            //  console.log("tduy")
            console.log("COMPLETED");
         }
        );
    }  

    submit()
    {
        console.log(this.register);
        this.service.sendRequest(this.register);
    }

    requestReg()
    {
         $('#myModal1').modal('show');
    }

    goToRecover()
    {
        this.route.navigate(['find']);
    }

    gotoRegisterRequest()
    {
        this.route.navigate(['register/request']);
    }

}