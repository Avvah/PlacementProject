import {Component} from '@angular/core'
import {FormBuilder} from '@angular/forms';
import { DriveService } from './drive.service';

@Component({
    selector:'settings',
    styleUrls:['app/public/css/settings.component.css'],
    template:`
    <div class="container-fluid">
        <form>
		    <div class="card">
	            <div class="card-header" data-background-color="blue">
	                <h4 class="title">Settings</h4>
				    <p class="category">Edit Settings</p>
			    </div>
	            <div class="card-content">
                    <button data-toggle="collapse" data-target="#demo">Change Password</button>
                    <div id="demo" class="collapse">
                        <form #f="ngForm" (ngSubmit)="onSubmitTemplateBased()">
                            <br>
                            <label>Current Password</label>
                            <input type="text"  class="form-control"
						        [(ngModel)]="pass.currentPassword" name = "currentPassword">
                            <br>
                            <label>New Password</label>
                            <input type="text" class="form-control"
						        [(ngModel)]="pass.newPassword" name = "newPassword" >
                            <br>
                            <label>Confirm Password</label>
                            <input type="text" class="form-control"
						        [(ngModel)]="pass.confirmPassword" name = "confirmPassword" >
                            <br>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div> 
        </form>
    </div>
    `,
    providers: [DriveService]
})

export class settingsComponent{

    pass: Object={};

    constructor(private driveService: DriveService){};
	
    onSubmitTemplateBased()
    {
		this.changePass(this.pass);
		console.log(this.pass);
	}

	changePass(pass)
    {
		this.driveService.changePass(pass);
	}
   
}