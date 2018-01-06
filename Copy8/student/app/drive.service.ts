import {Injectable} from '@angular/core';
import {CompanyArrayType} from './company-array-type';
import{StudentProfileArrayType} from './studentprofile-array-type'
import {Http,Response,Request,Headers,RequestMethod,RequestOptions} from'@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class DriveService{
    

    constructor(private http:Http,private requestOptions:RequestOptions,  ){ }

    static get parameters(){
        return [[Http]]
    }

    getCompanyMockArray(){
        return this.http
        .get('http://localhost:8123/api/company/list')
        .map((response: Response)=>response.json());   
    }
    
    add(comp:CompanyArrayType)
    {
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.post('http://localhost:8123/api/company',JSON.stringify(comp),{headers:headers})
        .map((res:Response)=>res)
        .subscribe(
        (response) => {
            /* this function is executed every time there's a new output */
           console.log("VALUE RECEIVED: "+response);
        },
        (err) => {
            /* this function is executed when there's an ERROR */
            console.log("ERROR: "+err);
        },
        () => {
            /* this function is executed when the observable ends (completes) its stream */
            console.log("COMPLETED");
        }
        );
    }

    getAll(){
        return this.http
        .get('http://localhost:8123/api/student/list')
        .map((response: Response)=>response.json());
    }

    addstud(sach:string){
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.post('http://localhost:8123/api/student',(sach),{headers:headers})
        .map((res:Response)=>res)
        .subscribe(
        (response) => {
           console.log("VALUE RECEIVED: "+response);
        },
        (err) => {
            console.log(sach);
            console.log("ERROR: "+err);
        },
        () => {
            console.log("COMPLETED");
        }
        );
    }

    //Adding Students Complete Details which they edit/fill
    addstudentProfile(model:any){
        
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        console.log(model+"  "+(localStorage.getItem("userid")));
        return this.http.put('http://localhost:8123/api/student/update/'+(localStorage.getItem("userid")),model,{headers:headers})
        .map((res:Response)=>res);
        
    }

    //Getting a Student Profile
    getStudentProfile():any{
         return this.http
        .get('http://localhost:8123/api/student/list')
    
        .map((response: Response)=>{response.json().data as StudentProfileArrayType[];console.log(response)});
        
    }

    changePass(pass)
    {
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.post('http://localhost:5322/changePassword',pass,{headers:headers})
        .map((res:Response)=>res)
        .subscribe(
        (response) => {
           console.log("VALUE RECEIVED: "+response);
        },
        (err) => {
            console.log("ERROR: "+err);
        },
        () => {
            console.log(pass)
            console.log("COMPLETED");
        }
        );
    }

    sendLogin(pass)
    {
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        console.log(this.http)
        return this.http.post('http://localhost:5322/recieveLogin',pass,{headers:headers})
        .map((res:Response)=>res)
        .subscribe(
        (response) => {
           console.log("VALUE RECEIVED: "+response);
        },
        (err) => {
            console.log("ERROR: "+err);
        },
        () => {
            console.log(pass)
            console.log("COMPLETED");
        }
        );
    }

    getdataforresume(){
        console.log("Reached Service")
        console.log("StudentProfileArrayType")
        console.log(StudentProfileArrayType)
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return  this.http.get('http://localhost:8123/api/student/view/'+localStorage.getItem("userid"))
       .map((response: Response)=>response.json());
       
        
    }

    ambuja;
    //Adding The ImageFile From ProfileComponent 
    addStudentImage(imageFile){
        console.log("Reached Servive to Upload Image To DB");
        console.log(imageFile);
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.put('http://localhost:8123/api/student/image/'+localStorage.getItem("userid"), imageFile,{headers:headers})
        .map((res:Response)=>res)
        .subscribe(
        (response) => {
            
           console.log("VALUE RECEIVED: "+response);
           console.log("Particular Data")
           console.log(response)


        },
        (err) => {
            console.log(imageFile);
            console.log("ERROR: "+err);
        },
        () => {
            console.log("COMPLETED");
        }
        );
    }
  
   
    
}