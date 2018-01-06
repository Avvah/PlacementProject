import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Http,Response,Request,Headers,RequestMethod,RequestOptions} from'@angular/http';
import 'rxjs/add/operator/map';
import {AuthGuard} from './auth.guard';


@Injectable()
export class AuthenticationService
{
    constructor( private http:Http, private router:Router, private requestOptions:RequestOptions,
                 private authguard:AuthGuard)
    {
        
    }

    

    static get parameters()
    {
        return [[Http]];
    }

   

    logout(user_id)
    {
        //console.log(user_id);
		 
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.put('http://localhost:8123/api/login/adminsignout/'+user_id,{headers:headers})
        .map((res:Response)=>res);
    }

    login(user)
    {
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.post('http://localhost:8123/api/login/adminsignin',(user),{headers:headers});
    }

    logFlag(flag)
    {
        console.log("Im in logFlag"+flag);
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.put('http://localhost:8123/api/login/setFlag/'+flag,{headers:headers});
    }

    checkCredentials()
    {
        if (localStorage.getItem("userid") === null)
        {
        console.log("Im returing false");
            return false
        }
        else
        {
            console.log("Im returning true");
            return true;
        }
    }

    //Sending The Request Form for Admin To Decide Whether To Accept Or Reject
    sendRequest(requestData)
    {
        console.log("Reached Servive to send request");
        console.log(requestData);
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.put('http://localhost:8123/api/adminLogin/request', requestData,{headers:headers})
        .map((res:Response)=>res)
        .subscribe(
        (response) => {
           console.log("VALUE RECEIVED: "+response);
           console.log("Particular Data")
           console.log(response)


        },
        (err) => {
            console.log(requestData);
            console.log("ERROR: "+err);
        },
        () => {
            console.log("COMPLETED");
        }
        );
    }
}
