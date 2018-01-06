import{Component,OnInit} from '@angular/core';
import {Router}   from '@angular/router';


@Component({
    selector:'resume',
    styleUrls:['app/public/css/resume.component.css'],
    template:`<div class="container-fluid">
    <div class="card">
    <h4 class="text-center"> Standard Resume </h4>
    <button type="button" class="btn btn-info btn-sm"(click)="loadResume()">Select style
    </button>
    </div>
    </div>`
})



export class ResumeStylesComponent{
    
constructor(private router:Router){}

    loadResume():void{
        this.router.navigate(['final/resume'])
       console.log("clicked");
    }

    ngOnInit(){
        if(localStorage.getItem("userid")===null){
            console.log("ummmm")
            this.router.navigate(['login']);
        }
    }
}