import{Component,OnInit} from'@angular/core';
import{DriveService}from'./drive.service';
import{StudentProfileArrayType} from './studentprofile-array-type';
import{Router} from '@angular/router';
import { ResumeStylesComponent} from './resume-styles.component';


@Component({
    selector:'final resume',
    templateUrl:'app/public/html-templates/classic.html',
    styleUrls:['app/public/css/classic.css'],
    providers:[DriveService]

})

export class FinalResumeComponent implements OnInit {
  private student:StudentProfileArrayType;
constructor(private driveservice:DriveService, private route:Router){}

ngOnInit(){
    this.driveservice.getdataforresume().subscribe(student=>{this.student=student;
        console.log(student)} 
    ,
           

    err=>console.log(err)
    )
    console.log("IM REACHED")
   
    };
    
printDiv(printable) {
 console.log("ready to print");
 var restorepage =  document.body.innerHTML;
 var printcontent = document.getElementById(printable).innerHTML;
 document.body.innerHTML = printcontent;
 window.print();
 document.body.innerHTML = restorepage;
}     
         
    
}