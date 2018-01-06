import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
    selector:'request-register',
    templateUrl:'app/public/htmlTemplates/register-request.component.html',
    styleUrls:['app/public/css/register-request.component.css']
})


export class RegisterRequestComponent
{    
    register:Object={};

    constructor(private service:AuthenticationService)
    {

    }
        
    submit()
    {
        console.log(this.register);
        this.service.sendRequest(this.register);
    }

}
