"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var drive_service_1 = require('./drive.service');
var studentComponent = (function () {
    function studentComponent(driveservice) {
        this.driveservice = driveservice;
    }
    studentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.driveservice.getAll()
            .subscribe(function (s) { _this.students = s; console.log(s); }, function (err) { return console.log(err); });
    };
    studentComponent.prototype.disable = function (input) {
        //  if(input == "single"){
        //  	document.getElementById('usn').disabled = false;
        //  	document.getElementById('email').disabled = false;
        //  	document.getElementById('fileupload').disabled = true;
        //  }
        //  else
        //  {
        //  	document.getElementById('usn').disabled = true;
        //  	document.getElementById('email').disabled = true;
        //  	document.getElementById('fileupload').disabled = false;
        //  }
    };
    studentComponent.prototype.inviteStudents = function () {
        this.studs = [(this.usn), (this.email)];
        this.sach = "{\"usn\":\"" + this.usn + "\",\"email\":\"" + this.email + "\"}";
        console.log(this.studs);
        console.log(this.sach);
        this.addstud(this.sach);
    };
    studentComponent.prototype.addstud = function (sach) {
        this.driveservice.addstud(sach);
    };
    studentComponent = __decorate([
        core_1.Component({
            selector: "students",
            styleUrls: ['app/public/css/students.component.css'],
            template: "\n    <div class=\"container-fluid\">\n\t    <div class=\"row\">\n\t        <div class=\"col-md-12\">\n\t            <div class=\"card\">\n\t                <div class=\"card-header\" data-background-color=\"blue\">\n\t                    <h4 class=\"title\">Students</h4>\n\t                    <p class=\"category\">This is a list of students registered on placement portal</p>\n\t                </div>\n\t                <div class=\"card-content table-responsive\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"tesco\" *ngFor=\"let student of students\">\n\t\t\t\t\t\t\t\t<a  routerLink=\"/home/students/view/{{student._id}}\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<img class=\"img-responsive img-circle\" src=\"../app/public/assets/img/faces/marc.jpg\" alt=\"Paris\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t<p style=\"padding-left:10px;\" title=\"USN\">{{student.usn}}</p>\n\t\t\t\t\t\t\t\t\t\t<p style=\"padding-left:10px;\" title=\"Name\">{{student.fullName}}</p>\n\t\t\t\t\t\t\t\t\t\t<p style=\"padding-left:10px;\" title=\"Coarse\">B.E/</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t            </div>\n\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t<!-- Trigger the modal with a button -->\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\"\n\t\t\t\t\t\t\t data-target=\"#myModal\">Invite Students</button>\n\t\t\t\t\t\t\t<div id=\"myModal\" class=\"modal fade\" role=\"dialog\" data-backdrop=\"false\">\n  \t\t\t\t\t\t\t\t<div class=\"modal-dialog\">\n\t\t\t\t\t\t\t\t  <!-- Modal content-->\n      \t\t\t\t\t\t\t\t<div class=\"modal-content\">\n        \t\t\t\t\t\t\t\t<div class=\"modal-header\" background-color=\"blue\">\n          \t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t  <h4 class=\"modal-title\">Add Student(s)</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<form name = test>\n\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"chooseone\" value=\"single\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"disable('single')\"><label for=\"single\">Single Entry</label><br>\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Student's USN</label>\n          \t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t name= \"usn\" [(ngModel)]=\"usn\" id=\"usn\" >\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Email ID</label>\n          \t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t name= \"email\" [(ngModel)]=\"email\" id=\"email\" >\n\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"chooseone\" value=\"multiple\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"disable('multiple')\"><label for=\"multiple\">Multiple Entry</label><br>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"fileupload\" value=\"fileupload\" id=\"fileupload\">\n        \t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t\t\t\t\t\t<div class =\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"inviteStudents()\">Invite</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class =\"col-md-9\">\n          \t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n        \t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div> \n\t\t\t\t\t     </div>            \n    ",
            providers: [drive_service_1.DriveService]
        }), 
        __metadata('design:paramtypes', [drive_service_1.DriveService])
    ], studentComponent);
    return studentComponent;
}());
exports.studentComponent = studentComponent;
//# sourceMappingURL=students.component.js.map