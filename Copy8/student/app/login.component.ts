import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StudentAuthenticationService} from './student-authentication.service';

@Component({
    selector: "login-form",
    styleUrls:['app/public/css/login.component.css'],
    template:`
    
    <body>
   
    <div class="container"> 
    <div class="row">
        <div class="col-sm-6"></div>
        <div class="col-sm-4">
            <div class="card lgbox">
            <div class="card-content">
                <form #f="ngForm" ngSubmit="onClickLogin()">
                    <div class="input-field col s12">
                        <div class="form-group">
                            <div class="row" style="padding:0px 20px;">
                                <input type=text name="userName" [(ngModel)]="user.userName" placeholder="Username" class="form-control" id="text_box">
                            </div>
                        </div>
                    </div>             
                    <div class="input-field col s12">
                        <div class="form-group">
                            <div class="row" style="padding:0px 20px;">
                                <input type=password name="password" [(ngModel)]="user.password" placeholder="Password" class="form-control" id="text_box">
                            </div>
                        </div>
                    </div>
                    <span>{{errormsg}}</span>
                    <div style=" text-align:center;">
                    <button type="submit"  class="btn waves-effect waves-light" (click)="login()" name="action"
                    style="width:200px; position:center;">Login</button>
                    </div>
                </form>
            </div>
            <div class="card-footer" style="text-align:center">
                <a routerLink="/register/request"><p>Placement officer? click here to register</p></a>
            </div>      
            </div>
        </div>
    </div>
</div>
`,
    providers:[StudentAuthenticationService]
})

export class LoginComponent{
    user: Object ={};
    public errormsg = '';
    
    constructor(private service:StudentAuthenticationService, private route:Router){}

    ngOnInit(){
        localStorage.removeItem("userid");
    }
    

    login(){
        console.log(this.user);
        this.service.login(this.user)
        .map((res)=>res.json())
        .subscribe(
        (response) => {
           console.log("VALUE RECEIVED: "+response);
           
           if(response === null)
           {
               console.log("Navigating to login page");
               this.route.navigate(['login']);
               
           }
           else{
               console.log(response._id);
               console.log(response);
               localStorage.setItem("user",response);
               console.log(localStorage.getItem("user"));
               localStorage.setItem("userid",response._id);
               console.log(localStorage.getItem("userid"));
               this.route.navigate(['']);
               
           }
        },
        (err) => {
            // console.log(user)
            console.log("ERROR: "+err);
        },
        () => {
            //  console.log("tduy")
            console.log("COMPLETED");
         }
        )
        //if(!this.service.login(this.user)){
            //this.errormsg='Login Failed'
        }
        

         
 
    
    }
    
