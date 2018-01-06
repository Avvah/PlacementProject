import { Component } from '@angular/core';
import {StudentAuthenticationService} from './student-authentication.service';
import {Router} from '@angular/router';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';


@Component({
    selector: 'my-appp',
    styleUrls: ['app/public/css/home.component.css'],
    templateUrl:'app/public/html-templates/home.component.html',
	providers:[StudentAuthenticationService]
})

export class HomeComponent{

	constructor(private service:StudentAuthenticationService, private route:Router){}

	checkCredential(){
		if(localStorage.getItem("userid")===null){
			return true;
		}
		else{
			return false;
		}

	}

	ngOnInit(){
        this.service.checkCredentials();
		if(!this.service.checkCredentials()){
			console.log("Entered app crendtials");
			this.route.navigate(['login']);
		}

    }

	 logout() {
        this.service.logout();
		if(this.service.logout()){
			console.log(":)");
			this.route.navigate(['login']);
		}
    }

	public toasterconfig : ToasterConfig = 
        new ToasterConfig({
            showCloseButton: true, 
            tapToDismiss: false, 
            timeout: 3000,
            positionClass:'toast-bottom-left'
           
        });
	
}