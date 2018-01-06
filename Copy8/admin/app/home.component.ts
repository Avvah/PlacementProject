import { Component, ElementRef } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, RouterOutlet } from '@angular/router';
import { DriveService } from './drive.service';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { FileUploader } from 'ng2-file-upload';
import { StudentFile } from './StudentsFile';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import {AuthGuard} from './auth.guard';

import * as jwt_decode from 'angular2-jwt';

declare var $:any;
declare var window;

@Component({
    selector: 'my-appp',
    styleUrls: ['app/public/css/home.component.css'],
    templateUrl:'app/public/htmlTemplates/home.component.html',
	providers:[AuthenticationService]
})

export class HomeComponent
{
	constructor(private service:AuthenticationService, private route:Router, private driveservice:DriveService,
				private auth: AuthenticationService, public authHttp: AuthHttp, private authguard:AuthGuard)
	{
		
	}
	
	data = null;

	// checkCredential(){
	// 	if(localStorage.getItem("userid")===null){
	// 		return true;
	// 	}
	// 	else{
	// 		return false;
	// 	}
	// }

	ngOnInit(){
		
		this.service.logFlag(2)
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

        this.service.checkCredentials();
		if(!this.service.checkCredentials()){
			console.log("Entered app crendtials");
			this.route.navigate(['login']);
		}
		// else{
		// 	this.authguard.logFlag = 1;
		// }

    }

	 logout() 
	 {
		var user_id = localStorage.getItem("userid");
		console.log(user_id);
        this.service.logout(user_id)
		.subscribe(
        (response) => 
		{
			console.log("VALUE RECEIVED: "+response);
			console.log("Particular Data")
			console.log(response);
			this.service.logFlag(0)
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
			this.authguard.logFlag = 0;
			localStorage.removeItem("userid");
			console.log(localStorage.getItem("userid"));
			console.log("Admin is Logging Out...");
			this.route.navigate(['login']);

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

	usn:String;
	email:String;
	bigFile: String;
	someArray: Object ={};
	student: String[];
	studs: Array<String>;
	sach:string;
	studfile: Array<StudentFile>;
	 
	inviteStudents()
	{
		this.studs = [(this.usn),(this.email)];
		this.sach = "{\"usn\":\""+this.usn+"\",\"email\":\""+this.email+"\"}";
	  	console.log(this.sach);
	  	this.addstud(this.sach);
	}

	addstud(sach)
	{
		this.driveservice.addstud(sach);
	}

	addClassFile(classFile)
	{
		this.driveservice.addClassFile(classFile);
	}

	//onChange file listener
	// changeListener(fileInput: any){
	// 	if (fileInput.target.files && fileInput.target.files[0])
	// 	{
	// 		var reader = new FileReader();
	// 		console.log(fileInput.target.files[0]);
	// 		console.log(fileInput);

	// 		this.addClassFile(fileInput.target.files[0])

	// 		reader.readAsDataURL(fileInput.target.files[0]);
	// 	}
	
	// }

	changeListener($event) : void 
	{
		console.log("In Change listener function");
    	this.readThis($event.target);
  	}

	pusharray =[];
  	
	readThis(inputValue: any) : void 
	{
	  	console.log("In readThis function");
		var file:File = inputValue.files[0]; 
		var fileDisplayArea = document.getElementById('fileDisplayArea');
		var myReader:FileReader = new FileReader();

		myReader.onloadend = (e) => 
		{
		// you can perform an action with readed data here
		console.log (myReader.result );
		var csvData = myReader.result;
		fileDisplayArea.innerText = myReader.result;
	//   this.data = $.csv.toObjects(csvData);
	//   this.addClassFile(this.data);
	//   console.log(this.data)
	//   if (this.data && this.data.length > 0) {
    //             alert('Imported -' + this.data.length + '- rows successfully!');
    //         } else {
    //             alert('No data to import!');
    //        }
		var i;
		var str = fileDisplayArea.innerText;
		var res = str.split("\n");

		console.log(res);
		console.log(res[0]);
		console.log(res.length);
		for(i=0; i<res.length; i++)
		{
			var res1= res[i].split(",");
			console.log(res1);
			this.pusharray.push({usn:res1[0],email:res1[1]});
			
		}
		console.log(this.pusharray)
		this.someArray = [(fileDisplayArea.innerText)];
		console.log(this.someArray);		
    }
   	console.log( myReader.readAsText(file));
  }

  uploadStudents()
  {
	  this.addClassFile(this.pusharray);
  }

	public toasterconfig : ToasterConfig = new ToasterConfig(
		{
            showCloseButton: true, 
            tapToDismiss: false, 
            timeout: 3000,
            positionClass:'toast-bottom-left'
           
        });

	openTab(evt, entryName) 
	{
    // Declare all variables
		var i, tabcontent, tablinks;

		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) 
		{
			tabcontent[i].style.display = "none";
		}

		// Get all elements with class="tablinks" and remove the class "active"
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) 
		{
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}

		// Show the current tab, and add an "active" class to the link that opened the tab
		document.getElementById(entryName).style.display = "block";
		//evt.currentTarget.className += " active";
	}
	
}