import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Http,Response,Request,Headers,RequestMethod,RequestOptions} from'@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentAuthenticationService{

    constructor( private http:Http, private router:Router, private requestOptions:RequestOptions){
      
    }

    static get parameters(){
        return [[Http]]
    }

    logout(){
        localStorage.removeItem("userid");
        console.log(localStorage.getItem("userid"));
        return true;
        //this.router.navigate(['login']);
    }

    login(user:any){
        
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.post('http://localhost:8123/api/student/signin',(user),{headers:headers});

    }

    checkCredentials(){
        console.log(localStorage.getItem("userid"));
        if (localStorage.getItem("userid") === null){
            console.log("Im returing false");
            return false
        }
        else{
            console.log("Im returning true");
            return true;
        }

   
    }
}
