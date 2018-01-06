import {Component, OnInit} from '@angular/core';
import {CompanyArrayType} from './company-array-type';
import {DriveService} from './drive.service';
import {Router} from '@angular/router';
import {ToasterModule, ToasterService } from 'angular2-toaster/angular2-toaster';

@Component({
    selector:'drive',
    styleUrls:['app/public/css/drive.component.css'],
    template:`
	<!--<toaster-container></toaster-container>
	<button type = 'button' (click)="pop()">toast</button>-->
    <div class="container-fluid">
	    <div class="row">
	        <div class="col-md-12">
	            <div class="card">
	              <!--  <div class="card-header" data-background-color="blue">
	                    <h4 class="title">Upcoming Placement Drives</h4>
	                    <p class="category">These are the list of upcoming events</p>
	                </div>-->
	                <div class="card-content table-responsive">
	                    <table class="table">	
	                        <thead class="text-primary" id="table-head">
	                            <th col width ="60">Sl.No</th>
	                            <th col width ="150">Company Name</th>
	                            <th col width ="150">Company Location</th>
								<th col width ="70">Cut Off</th>
								<th col width ="90">Branches</th>
								<th col width ="90">Date</th>
								<th col width ="90">Report Time</th>
								<th col width ="130">Venue</th>
	                        </thead>
	                        <tbody id="table-content">
	                            <tr *ngFor="let filteredArray of filteredArrays">
	                                <td col width ="60">*</td>
	                            	<td col width ="150">{{filteredArray.name}}</td>
	                            	<td col width ="150">{{filteredArray.location}}</td>
									<td col width ="70">{{filteredArray.cutOff}}</td>
									<td col width ="90">{{filteredArray.branch}}</td>
                                  	<td col width ="90">{{filteredArray.date}}</td>
                                 	<td col width ="90">{{filteredArray.time}}</td>
									<td col width ="130">{{filteredArray.venue}}</td>	
								</tr>
	                        </tbody>
	                    </table>
	                </div>
	            </div>
	        </div>
        </div>
		
    </div>
    `,
	
	providers:[DriveService]
})

export class driveComponent implements OnInit
{
	companyArrays: CompanyArrayType[] = [];
	filteredArrays: CompanyArrayType[] = [];
	student;
	private toasterService: ToasterService;
	constructor(private driveService:DriveService, private route:Router, toasterService:ToasterService){
		this.toasterService = toasterService;
	};

	ngOnInit(){
		
        if(localStorage.getItem("userid")===null){
            console.log("ummmm")
            this.route.navigate(['login']);

        }
   
		this.driveService.getCompanyMockArray()
			.subscribe(
				s =>{this.companyArrays=s;
					console.log(this.companyArrays)},
				err => console.log(err)
			);

		this.driveService.getdataforresume().subscribe(student=>{this.student=student;
        	console.log(student)
			var i,j=0;
			console.log(this.companyArrays.length, this.student.marks)
			
			for(i=0;i<this.companyArrays.length;i++){

				if((this.companyArrays[i].cutOffS<=this.student.marks||this.companyArrays[i].cutOffS === "No Cut Off")
				&&(this.companyArrays[i].cutOffP<=this.student.marks1||this.companyArrays[i].cutOffP ==="No Cut Off")
				&&(this.companyArrays[i].cutOffD<=this.student.marks2||this.companyArrays[i].cutOffD === "No Cut Off")){
					
					this.filteredArrays[j]=this.companyArrays[i];
					j++;
				
			}
			}
			},
        	err=>console.log(err)
			);
    	console.log("IM REACHED")
		
	}


	
}