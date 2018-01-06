import { Component, OnInit } from '@angular/core';
import { CompanyArrayType } from './company-array-type';
import { DriveService } from './drive.service';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { AuthHttp, JwtHelper  } from 'angular2-jwt';

@Component({
    selector:'drive',
    styleUrls:['app/public/css/sampledrive.css'],
    templateUrl:'app/public/htmlTemplates/sampledrive.html',
	providers:[DriveService]
})

export class driveComponent implements OnInit
{
	// jwt: string;
  	// decodedJwt: string;
	// response: string;
  	// api: string;
	// jwtHelper: JwtHelper = new JwtHelper();

	companyArrays: CompanyArrayType[] = [];

	constructor(private driveService:DriveService,private authservice:AuthenticationService,
	 			private route:Router, public authHttp: AuthHttp)
	{
		// this.jwt = localStorage.getItem('userid');
    	// // this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
		// this.decodedJwt = this.jwtHelper.decodeToken(this.jwt);
		// // this.jwtDate = this.jwtHelper.getTokenExpirationDate(this.jwt);
		// this.jwtExpired = this.jwtHelper.isTokenExpired(this.jwt);
	};

	ngOnInit()
	{
		// if(!this.authservice.checkCredentials()){
		// 	this.route.navigate(['login'])
		// }
		
		this.driveService.getCompanyMockArray()
			.subscribe(
				s => {this.companyArrays=s;
				console.log(s)},
				err => console.log(err)
			);
	}

	deleteDrive(comid)
	{
		console.log("comid: "+comid);
		this.driveService.deleteDrive(comid)
		.subscribe(
        (response) =>
		{
           console.log("VALUE RECEIVED: "+response);
           console.log("Company Deleted");
		   this.route.navigate(['dummy']);
		   console.log(response);
           this.route.navigate(['home/drive']);

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

}