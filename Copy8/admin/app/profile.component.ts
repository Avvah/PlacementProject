import { Component, OnInit, Input } from '@angular/core'
import { FormBuilder,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DriveService } from './drive.service';
import { AuthenticationService } from './authentication.service';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { AuthHttp, JwtHelper  } from 'angular2-jwt';

@Component({
    selector: 'profile-view',
    styleUrls:['app/public/css/profile.component.css'],
    templateUrl:'app/public/htmlTemplates/profile.component.html',
	providers:[DriveService, AuthenticationService]
})

export class ProfileComponent
{
	id:String;
	src: string = "";
	student;

    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes
	private toasterService: ToasterService;

    constructor(private _fb: FormBuilder, private driveservice:DriveService,private route: ActivatedRoute,
				private router:Router, private tosterservice:ToasterService, private auth: AuthenticationService,
				public authHttp: AuthHttp) 
	{
		this.id=route.snapshot.params['id'];
		console.log(this.id);
		this.toasterService = tosterservice;
	}
	 
	sid=this.route.snapshot.params['id'];
	std: Object={id:this.sid}
	
	onSubmit()
	{
		this.addstudentProfile(this.std);
		console.log(this.std);
	}

	addstudentProfile(std)
	{
		this.driveservice.addstudentProfile(std)
		.subscribe(
			(response) =>
			{
				console.log("VALUE RECEIVED: "+response);
				this.toasterService.pop('success', 'Updated', 'Profile was updated Sucessfully');
			},
			(err) => 
			{
				console.log("ERROR: "+err);
				this.toasterService.pop('error', 'Error', 'Some problem occured while updating. Try Again.');
			},
			() => 
			{
				console.log("COMPLETED");
			}
		);
	}

	addStudentImage(id,imageFile)
	{
		this.driveservice.addStudentImage(id,imageFile);
		console.log(id);
	}

	ngOnInit()
	{
        // if(!this.auth.checkCredentials())
		// {
        //     console.log("ummmm")
        //     this.router.navigate(['login']);
        // }
		this.sid;
		this.driveservice.getdataforresume(this.sid).subscribe(student=>
		{
			this.student=student;
        	console.log(student)
		},
		err=>console.log(err)
		);
		console.log("IM REACHED")
	}

	//onChange file listener
	changeListener(fileInput: any)
	{
		if (fileInput.target.files && fileInput.target.files[0]) 
		{
			var reader = new FileReader();
			console.log(fileInput.target.files[0]);
			console.log(fileInput);
			this.src=fileInput.target.files[0];

			this.addStudentImage(this.sid,fileInput.target.files[0])

			reader.readAsDataURL(fileInput.target.files[0]);
		}
	}
	
}