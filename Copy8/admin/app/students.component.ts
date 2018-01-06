import { Component } from '@angular/core';
import { DriveService } from './drive.service';
import { ProfileComponent } from './profile.component';
import { AuthenticationService } from './authentication.service';
import { SearchPipe } from './searchpipe';
import { SearchBoxComponent } from './search-box';
import { Router } from '@angular/router';
import { AuthHttp, JwtHelper  } from 'angular2-jwt';

@Component({
    selector: "students",
    styleUrls:['app/public/css/students.component.css'],
    templateUrl:'app/public/htmlTemplates/students.component.html',
	providers:[DriveService]
})

export class studentComponent
{
    students;
    
	constructor(private driveservice:DriveService,private authservice:AuthenticationService, 
				private route:Router, public authHttp: AuthHttp)
	{
	
	}

	ngOnInit(){
		// if(!this.authservice.checkCredentials()){
		// 	this.route.navigate(['login'])
		// }
		this.driveservice.getAll()
		.subscribe(
				s => {this.students=s;
					 console.log(s);},
				err => console.log(err)
			);	
	}

	//disable(input){
		//  if(input == "single"){
		//  	document.getElementById('usn').disabled = false;
		//  	document.getElementById('email').disabled = false;
		//  	document.getElementById('fileupload').disabled = true;
		//  }
		//  else
		//  {
		//  	document.getElementById('usn').disabled = true;
		//  	document.getElementById('email').disabled = true;
		//  	document.getElementById('fileupload').disabled = false;
		//  }
	//}

	
}