import { Component } from '@angular/core'
import { AuthenticationService } from './authentication.service';
import { AuthHttp, JwtHelper  } from 'angular2-jwt';

@Component({
    selector: "inner-menu",
    styleUrls: [ 'app/public/css/inner-menu.component.css' ],
    templateUrl:'app/public/htmlTemplates/inner-menu.component.html'
})

export class innermenuComponent
{
    menuitems:Array<Object> = [
        {"name":"Placement Drive","url":"home/drive","ico":"dashboard","status":""},
        {"name":"Students","url":"home/students","ico":"people","status":""},
        {"name":"Reports","url":"home/reports","ico":"bubble_chart","status":""},
        {"name":"Settings","url":"home/settings","ico":"notifications","status":""},
    ]
    
    constructor(private service:AuthenticationService, public authHttp: AuthHttp)
    {
    
    }

	
}