import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private router:Router, private service:AuthenticationService)
    {
        
    }

    public logFlag;
    
        
    

    

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    {
         
            this.service.logFlag(2)
            .map((res)=>res.json())
            .subscribe(
            (response) => 
            {
                console.log("VALUE RECEIVED: "+response);
                console.log("Particular Data")
                this.logFlag = response;
                console.log(this.logFlag);
                if (this.logFlag == 1 || this.logFlag != 0)
                {
                    // if(this.router.url === '/login'){
                    //  this.router.navigate(['login']);
                    // }
                    // else
                    // logged in so return true
                    return true;
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
            

        //Else redirect them to login page
        this.router.navigate(['login']);
        return false;
    }

}