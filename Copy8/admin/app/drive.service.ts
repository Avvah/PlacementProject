import { Injectable, EventEmitter } from '@angular/core';
import { CompanyArrayType } from './company-array-type';
import { Http,Response,Request,Headers,RequestMethod,RequestOptions } from'@angular/http';
import { ToasterModule, ToasterService } from 'angular2-toaster/angular2-toaster';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';


@Injectable()
export class DriveService
{
    static get parameters()
    {
        return [[Http]];
    }
    
    private toasterService: ToasterService;
    
    constructor(private http:Http,private requestOptions:RequestOptions,private tosterservice:ToasterService,
                private route:Router)
    {
        this.toasterService = tosterservice;
    }

    //List Of Companies In Drive
    getCompanyMockArray()
    {
        return this.http
        .get('http://localhost:8123/api/company/list')
        .map((response: Response)=>response.json());   
    }
    
    //Function To Add A new Company Details from company-profile.component
    add(comp:CompanyArrayType)
    {
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.post('http://localhost:8123/api/company',JSON.stringify(comp),{headers:headers});
        
    }

    //All Students in DB
    getAll()
    {
        return this.http
        .get('http://localhost:8123/api/student/list')
        .map((response: Response)=>response.json());
    }

    //Adding A single(new) student.
    addstud(sach:string)
    {
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        // headers.append("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        return this.http.post('http://localhost:8123/api/student',(sach),{headers:headers})
        .map((res:Response)=>res)
        .subscribe(
        (response) =>
        {
           console.log("VALUE RECEIVED: "+response);
        },
        (err) =>
        {
            console.log(sach);
            console.log("ERROR: "+err);
        },
        () =>
        {
            console.log("COMPLETED");
        }
        );
    }

    //Updating or edited student profile details
    addstudentProfile(model:any)
    {
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.put('http://localhost:8123/api/student/update/'+(model.id), model,{headers:headers})
        .map((res:Response)=>res);
    }

    //Changing Admins Password
    changePass(pass:any)
    {
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.put('http://localhost:8123/api/login/changepassword/'+(pass.id),pass,{headers:headers})
        .map((res:Response)=>res.json());
    }

    //Adding Students In Bulk Using CSV File
     addClassFile(sach:string)
     {
        var headers = new Headers();
        headers.append('Content-Type','application/json')
       // headers.append("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        return this.http.post('http://localhost:8123/api/student/inBulk',(sach),{headers:headers})
        .map((res:Response)=>res)
        .subscribe(
        (response) =>
        {

           console.log("VALUE RECEIVED: "+response);
        },
        (err) =>
        {
            console.log(sach);
            console.log("ERROR: "+err);
        },
        () =>
        {
            console.log("COMPLETED");
        }
        );
     }

    //Fetching the dataOfIndividual Students.
    getdataforresume(idd)
    {
        console.log("Reached Service");
        console.log("StudentProfileArrayType");
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return  this.http.get('http://localhost:8123/api/student/view/'+idd)
       .map((response: Response)=>response.json());
       
        
    }

    //Adding The ImageFile From ProfileComponent 
    addStudentImage(id,imageFile)
    {
        console.log("Reached Servive to Upload Image To DB");
        console.log(imageFile);
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.put('http://localhost:8123/api/student/image/'+id, imageFile,{headers:headers})
        .map((res:Response)=>res)
        .subscribe(
        (response) =>
        {
           console.log("VALUE RECEIVED: "+response);
           console.log("Particular Data")
           console.log(response)


        },
        (err) =>
        {
            console.log(imageFile);
            console.log("ERROR: "+err);
        },
        () =>
        {
            console.log("COMPLETED");
        }
        );
    }

    //Deletes the company from DB based on the id
    deleteDrive(compid)
    {
        console.log("Im in drive")
        console.log(compid);
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.delete('http://localhost:8123/api/company/delete/'+ compid,{headers:headers})
        .map((res:Response)=>res);
    }

    //Recieves the company details from DB based on the id passed.
    getdataforcompany(compid)
    {
        console.log("Im reached")
		var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.get('http://localhost:8123/api/company/data/'+compid)
        .map((response: Response)=>response.json());
	}

    //Updating Company Details
    updateCompany(model:any)
    {
        console.log(model.id);
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.put('http://localhost:8123/api/company/update/'+(model.id), model,{headers:headers})
        .map((res:Response)=>res)
        .subscribe(
        (response) => 
        {
           console.log("VALUE RECEIVED: "+response);
        },
        (err) => 
        {
            console.log(model);
            console.log("ERROR: "+err);
        },
        () => 
        {
            console.log("COMPLETED");
        }
        );
    }

    //Asking For A verificaton code to recover the account.
    sendRecoverRequest(resetType, user)
    {
        console.log(user);
        console.log(resetType);
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.put('http://localhost:8123/api/login/recover/'+(user), resetType,{headers:headers})
        .map((res:Response)=>res.json());
        
    }

    foundEvent: EventEmitter<any> = new EventEmitter();
    // // foundEventemail: EventEmitter<any> = new EventEmitter();
    // // foundEventphoneNumber: EventEmitter<any> = new EventEmitter();
    // found;
    // f_email: string;
    // f_phone: number;
    //FInding Accound based on email/phone number/username
    sendFindRequest(find)
    {
        console.log(find);
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.put('http://localhost:8123/api/login/find', find,{headers:headers})
        .map((res:Response)=>res.json())
        ;
    }

    //To get the result in recover page
    sendFindRequestAgain(find)
    {
        console.log(find);
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.put('http://localhost:8123/api/login/findAgain', find,{headers:headers})
        .map((res:Response)=>res.json());
    }

    //Changing password when user forgot thier account
    changetoNewPass(pass)
    {
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.put('http://localhost:8123/api/login/changeToNewpassword/'+(pass.id),pass,{headers:headers})
        .map((res:Response)=>res.json());
    }

    //Cross verifying the code entered and code associated with the account.
    checkForVerificationCode(vcode)
    {
        // console.log(vcode);
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.put('http://localhost:8123/api/login/verifyPhone',(vcode),{headers:headers})
        .map((res:Response)=>res.json());
    }
  
};