import {Component} from '@angular/core'
import {StudentAuthenticationService} from './student-authentication.service';

@Component({
    selector: "inner-menu",
    styleUrls: [ 'app/public/css/inner-menu.component.css' ],
    template:`
    <ul class="nav">
        <li class="{{menuitem.status}}" *ngFor="let menuitem of menuitems">
            <a routerLink="/{{menuitem.url}}">
                <i class="material-icons">{{menuitem.ico}}</i>
                <p>{{menuitem.name}}</p>
            </a>
        </li>
    </ul>  
    `
})

export class innermenuComponent{
    menuitems:Array<Object> = [
        {"name":"Placement Drive","url":"home/drive","status":""},
        {"name":"My Profile","url":"students/view","status":""},
         {"name":"Resume","url":"resume/styles","status":""}
    ]

    constructor(private service:StudentAuthenticationService){}

	/*ngOnInit(){
        this.service.checkCredentials();
        if(!this.service.checkCredentials){
            
        }
    }*/
}