import { Component, OnInit } from '@angular/core';
import { DriveService } from './drive.service';
import { Http, Response, Request,Headers, RequestMethod, RequestOptions } from'@angular/http';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthHttp, JwtHelper  } from 'angular2-jwt';

@Component({
    selector:'update-company-profile',
    templateUrl:'app/public/htmlTemplates/update-company-profile.component.html',
	providers:[DriveService]
})

export class UpdateCompanyProfileComponent
{    
	
    private toasterService: ToasterService;
    //id to store companies id
    id:string;
    company;

	constructor(private driveService: DriveService, private tosterservice:ToasterService, 
                private router: ActivatedRoute, private route:Router, public authHttp: AuthHttp)
    {
        this.toasterService = tosterservice;
        this.id=router.snapshot.params['id'];
		console.log(this.id);
    };

    cid=this.router.snapshot.params['id'];
	comp: Object={id:this.cid};

    public toasterconfig : ToasterConfig = new ToasterConfig(
        {
            showCloseButton: true, 
            tapToDismiss: false, 
            timeout: 0,
            positionClass:'toast-bottom-right'
           
        });

    ngOnInit()
    {
        // if(localStorage.getItem("userid")===null){
        // console.log("ummmm")
        // this.route.navigate(['login']);
        // }
        console.log(this.cid);
        this.driveService.getdataforcompany(this.cid)
        .subscribe(company=>{this.company=company;
        console.log(company)},
        err=>console.log(err)
        )
        console.log("IM REACHED")
    }

	onSubmitTemplateBased()
	{
		this.update(this.comp);
		console.log(this.comp);
	}

	update(comp)
	{
		this.driveService.updateCompany(comp)
	}
	
}