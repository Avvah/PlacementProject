import {Component, OnInit, Input,Directive} from '@angular/core'
import {FormBuilder,FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DriveService} from './drive.service';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';

@Component({
    selector: 'profile-view',
    styleUrls:['app/public/css/profile.component.css'],
    template:`
    <div class="container-fluid">
		<form #f="ngForm" (ngSubmit)="onSubmit()">
			<div class="card">
	        	<div class="card-header" data-background-color="blue">
	            	<h4 class="title">Edit Profile</h4>
					<p class="category">Complete your profile</p>
				</div>
	        	<div class="card-content">
			        <div class="row">
	                    <!--<div class="col-md-4">
							<div class="card-avatar">
        								<img src="{{src}}" [hidden]="!src" style="width:150px; height:150px"><br>
                                         <input type="file" name="pic" [(ngModel)]="std.pic" accept="image/*"
                                               (change)="changeListener($event)" id="imageButton">
           	
    						</div>
						</div>-->
						<div class = "col-md-12">
							<div class="form-group col-md-6">
							<label>Full Name</label>
							<input type="text"  value="{{student?.fullName}}" class="form-control" name="fullName" [(ngModel)]="std.fullName" id="fullName">
							</div>
							<div class="form-group col-md-6">
							<label>City</label>
							<input type="text" value="{{student?.address}}" class="form-control" name="address" [(ngModel)]="std.address" id="address">
							</div>
							<div class="form-group col-md-7">
							<label>Email ID</label>
							<input type="text" value="{{student?.email_id}}" class="form-control" name="email_id" [(ngModel)]="std.email_id" id="email_id">
							</div>
							<div class="form-group col-md-5">
							<label>Phone Number</label>
							<input type="text" value="{{student?.phoneNumber}}" class="form-control" name="phoneNumber" [(ngModel)]="std.phoneNumber" id="phoneNumber">
							</div>
						</div>
					</div>
					<div class="row">
					<div class="form-group">
						<label>Objective</label>
						<textarea value="{{student?.objective}}" class="form-control" name="objective" [(ngModel)]="std.objective" id="objective"></textarea><br>
					</div>
					</div>
					<div class="row">
						<table>
							<tr>
								<th>Degree/Examination</th>
								<th>Board/University</th>
								<th>Institute</th>
								<th>Year Of Passing</th>
								<th>Marks ( in % )</th>
							<tr>
							<tr>
								<td>
								<div class="form-group">
								<input type="text" value="{{student?.degree}}" class="form-control" name="degree" [(ngModel)]="std.degree" id="degree">
								</div>
								</td>
								<td><div class="form-group"><input type="text" value="{{student?.board}}" class="form-control" name="board" [(ngModel)]="std.board" id="board"></div></td>
								<td><div class="form-group"><input type="text" value="{{student?.institute}}" class="form-control" name="institute" [(ngModel)]="std.institute" id="institute"></div></td>
								<td><div class="form-group"><input type="text" value="{{student?.yearOfPassing}}" class="form-control" name="yearOfPassing" [(ngModel)]="std.yearOfPassing" id="yearOfPassing"></div></td>
								<td><div class="form-group"><input type="text" value="{{student?.marks}}" class="form-control" name="marks" [(ngModel)]="std.marks" id="marks"></div></td>
							</tr>
							<tr>
								<td><div class="form-group"><input type="text" value="{{student?.degree1}}" class="form-control" name="degree1" [(ngModel)]="std.degree1" id="degree1"></div></td>
								<td><div class="form-group"><input type="text" value="{{student?.board1}}" class="form-control" name="board1" [(ngModel)]="std.board1" id="board1"></div></td>
								<td><div class="form-group"><input type="text" value="{{student?.institute1}}" class="form-control" name="institute1" [(ngModel)]="std.institute1" id="institute1"></div></td>
								<td><div class="form-group"><input type="text" value="{{student?.yearOfPassing1}}" class="form-control" name="yearOfPassing1" [(ngModel)]="std.yearOfPassing1" id="yearOfPassing1"></div></td>
								<td><div class="form-group"><input type="text" value="{{student?.marks1}}" class="form-control" name="marks1" [(ngModel)]="std.marks1" id="marks1"></div></td>
							</tr>
							<tr>
								<td><div class="form-group"><input type="text" value="{{student?.degree2}}" class="form-control" name="degree2" [(ngModel)]="std.degree2" id="degree2"></div></td>
								<td><div class="form-group"><input type="text" value="{{student?.board2}}" class="form-control" name="board2" [(ngModel)]="std.board2" id="board2"></div></td>
								<td><div class="form-group"><input type="text" value="{{student?.institute2}}" class="form-control" name="institute2" [(ngModel)]="std.institute2" id="institute2"></div></td>
								<td><div class="form-group"><input type="text" value="{{student?.yearOfPassing2}}" class="form-control" name="yearOfPassing2" [(ngModel)]="std.yearOfPassing2" id="yearOfPassing2"></div></td>
								<td><div class="form-group"><input type="text" value="{{student?.marks2}}" class="form-control" name="marks2" [(ngModel)]="std.marks2" id="marks2"></div></td>
							</tr>
							<tr>
								<td><div class="form-group"><input type="text" value="{{student?.degree3}}" class="form-control" name="degree3" [(ngModel)]="std.degree3" id="degree3"></div></td>
								<td><div class="form-group"><input type="text" value="{{student?.board3}}" class="form-control" name="board3" [(ngModel)]="std.board3" id="board3"></div></td>
								<td><div class="form-group"><input type="text" value="{{student?.institute3}}" class="form-control" name="institute3" [(ngModel)]="std.institute3" id="institute3"></div></td>
								<td><div class="form-group"><input type="text" value="{{student?.yearOfPassing3}}" class="form-control" name="yearOfPassing3" [(ngModel)]="std.yearOfPassing3" id="yearOfPassing3"></div></td>
								<td><div class="form-group"><input type="text" value="{{student?.marks3}}" class="form-control" name="marks3" [(ngModel)]="std.marks3" id="marks3"></div></td>
							</tr>
						</table>
					</div>
					<div class="row">
						<div class="form-group">
						<section>
							<h4>Training/Certificates:</h4>
							<textarea rows="6" value="{{student?.training}}" name='myInputs[]' class='form-control' name="training" [(ngModel)]="std.training" id="training"></textarea>
						</section>
						</div>
						<div class="form-group">
						<section>
							<h4>Skills/Competencies:</h4>
							<textarea rows="6" value="{{student?.skills}}" class="form-control" name="skills" [(ngModel)]="std.skills" id="skills"></textarea>
						</section>
						</div>
						<div class="form-group">
						<section>
							<h4>Projects:</h4>
							<textarea rows="6" value="{{student?.projects}}" class="form-control" name="projects" [(ngModel)]="std.projects" id="projects"></textarea>
						</section>
						</div>
						<div class="form-group">
						<section>
							<h4>Activities</h4>
							<textarea rows="6" value="{{student?.activities}}" class="form-control" name="activities" [(ngModel)]="std.activities" id="activities"></textarea>
						</section>
						</div>
						<div class="form-group">
						<section>
							<h4>Hobbies/Interest:</h4>
							<textarea rows="6" value="{{student?.hobbies}}" class="form-control" name="hobbies" [(ngModel)]="std.hobbies" id="hobbies"></textarea>
						</section>
						</div>
					</div>	
					<button type="submit" class="btn btn-info invite-btn pull-right">Update Profile</button>
	                <div class="clearfix"></div>
				</div>
			</div>	
		</form>				
	</div>
    `,
	providers:[DriveService]
})


export class ProfileComponent
{
	id:String;
	image;
	public file: File;
	src: string = "";
	student;
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes
	private toasterService: ToasterService;	

    constructor(private _fb: FormBuilder, private driveservice:DriveService,private route: ActivatedRoute,
			private router:Router,private tosterservice:ToasterService) {
		this.id=route.snapshot.params['id'];
		console.log(this.id);
		this.toasterService = tosterservice;
	 } // form builder simplify form initialization
	 
	 sid=this.route.snapshot.params['id'];
	 std: Object={id:(localStorage.getItem("userid"))}

	//onChange file listener
	changeListener(fileInput: any){
		if (fileInput.target.files && fileInput.target.files[0]) {
			var reader = new FileReader();
			console.log(fileInput.target.files[0]);
			console.log(fileInput);
			this.src=fileInput.target.files[0];
			localStorage.setItem("userImage",fileInput.target.files[0]);
			this.addStudentImage(fileInput.target.files[0])
			this.file = fileInput.target.files[0];  
			console.log("heyya"+this.file);
    	}

		
	 	return fileInput.target.files[0];
	}
	
	 onSubmit(){
		 this.changeListener;
		this.addstudentProfile(this.std);
		console.log("this.std");
		console.log(this.std)
	}

	 addstudentProfile(std){
		
		this.driveservice.addstudentProfile(std)
		.subscribe(
        (response) => {
           console.log("VALUE RECEIVED: "+response);
           console.log("Particular Data")
           console.log(response)
		   this.toasterService.pop('success', 'Updated', 'Your Profile was updated Sucessfully');

        },
        (err) => {
            console.log("ERROR: "+err);
			this.toasterService.pop('error', 'Error', 'Some Problem Occured While updating. Try Again.');
        },
        () => {
            console.log("COMPLETED");
        }
        );
	}

	ngOnInit(){
        if(localStorage.getItem("userid")===null){
            console.log("ummmm")
            this.router.navigate(['login']);
        }

		this.driveservice.getdataforresume().subscribe(student=>{this.student=student;
        console.log(student)} 
    ,
           

    err=>console.log(err)
    )
    console.log("IM REACHED")
    }

	addStudentImage(imageFile){
		this.driveservice.addStudentImage(imageFile);
	}


}