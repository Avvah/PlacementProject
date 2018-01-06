import { Component, OnInit } from '@angular/core';
import { DriveService } from './drive.service';
import { Http,Response,Request,Headers,RequestMethod,RequestOptions } from'@angular/http';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { AuthHttp, JwtHelper  } from 'angular2-jwt';

declare var $:any;

@Component({
    selector:'company-profile',
    styleUrls:['app/public/css/company-profile.component.css'],
    templateUrl:'app/public/htmlTemplates/company-profile.component.html',
	providers:[DriveService]
})

export class CompanyProfileComponent
{    
	comp: Object={};
    private toasterService: ToasterService;
    //id to store companies id
    id:string;
    company;
    public tags = ['Car', 'Bus', 'Train'];

	constructor(private driveService: DriveService, private tosterservice:ToasterService,
                private router: ActivatedRoute, public authHttp: AuthHttp, private route:Router,
                private auth: AuthenticationService)
    {
        this.toasterService = tosterservice;
        this.id=router.snapshot.params['id'];
		console.log(this.id);
    };   

    // ngOnInit(){
    //     if(!this.auth.checkCredentials()){
    //         this.route.navigate[('login')]
    //     }
    // } 

    

	onSubmitTemplateBased()
	{
		this.add(this.comp);
		console.log(this.comp);
	}

	add(comp)
	{
		this.driveService.add(comp)
		.map((res:Response)=>res)
        .subscribe(
        (response) => {
            /* this function is executed every time there's a new output */
           console.log("VALUE RECEIVED: "+response);
        //    location.reload();
           this.toasterService.pop('success', 'Added', 'Company Added Sucessfully');

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

    // Adding more fields
    addfield()
    { 
        var html = "<input type='text' class='form-control' name = 'roundDetails' [(ngModel)]='comp.roundDetails'>";
        $('#fields').append(html);
    }

    expanded = false;
    showCheckBox()
    {
        var checkBoxes = document.getElementById('checkBoxes');
        if(!this.expanded)
        {
            checkBoxes.style.display = "block";
            this.expanded=true;
        }
        else
        {
            checkBoxes.style.display = "none";
            this.expanded = false;
        }
    }
	
}