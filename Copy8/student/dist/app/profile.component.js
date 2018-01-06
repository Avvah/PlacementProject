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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var drive_service_1 = require("./drive.service");
var ProfileComponent = (function () {
    function ProfileComponent(_fb, driveservice, route, router) {
        this._fb = _fb;
        this.driveservice = driveservice;
        this.route = route;
        this.router = router;
        this.src = "";
        this.events = []; // use later to display form changes
        this.sid = this.route.snapshot.params['id'];
        this.std = { id: (localStorage.getItem("userid")) };
        this.id = route.snapshot.params['id'];
        console.log(this.id);
    } // form builder simplify form initialization
    //onChange file listener
    ProfileComponent.prototype.changeListener = function (fileInput) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();
            console.log(fileInput.target.files[0]);
            console.log(fileInput);
            this.src = fileInput.target.files[0];
            localStorage.setItem("userImage", fileInput.target.files[0]);
            this.addStudentImage(fileInput.target.files[0]);
            this.file = fileInput.target.files[0];
            console.log("heyya" + this.file);
        }
        return fileInput.target.files[0];
    };
    ProfileComponent.prototype.onSubmit = function () {
        this.changeListener;
        this.addstudentProfile(this.std);
        console.log("this.std");
        console.log(this.std);
    };
    ProfileComponent.prototype.addstudentProfile = function (std) {
        this.driveservice.addstudentProfile(std);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem("userid") === null) {
            console.log("ummmm");
            this.router.navigate(['login']);
        }
        this.driveservice.getdataforresume().subscribe(function (student) {
            _this.student = student;
            console.log(student);
        }, function (err) { return console.log(err); });
        console.log("IM REACHED");
    };
    ProfileComponent.prototype.addStudentImage = function (imageFile) {
        this.driveservice.addStudentImage(imageFile);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile-view',
        styleUrls: ['app/public/css/profile.component.css'],
        template: "\n    <div class=\"container-fluid\">\n\t\t<form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t<div class=\"card\">\n\t        \t<div class=\"card-header\" data-background-color=\"blue\">\n\t            \t<h4 class=\"title\">Edit Profile</h4>\n\t\t\t\t\t<p class=\"category\">Complete your profile</p>\n\t\t\t\t</div>\n\t        \t<div class=\"card-content\">\n\t\t\t        <div class=\"row\">\n\t                    <!--<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<div class=\"card-avatar\">\n        \t\t\t\t\t\t\t\t<img src=\"{{src}}\" [hidden]=\"!src\" style=\"width:150px; height:150px\"><br>\n                                         <input type=\"file\" name=\"pic\" [(ngModel)]=\"std.pic\" accept=\"image/*\"\n                                               (change)=\"changeListener($event)\" id=\"imageButton\">\n           \t\n    \t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t<div class = \"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t<label>Full Name</label>\n\t\t\t\t\t\t\t<input type=\"text\"  value=\"{{student?.fullName}}\" class=\"form-control\" name=\"fullName\" [(ngModel)]=\"std.fullName\" id=\"fullName\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t<label>City</label>\n\t\t\t\t\t\t\t<input type=\"text\" value=\"{{student?.address}}\" class=\"form-control\" name=\"address\" [(ngModel)]=\"std.address\" id=\"address\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-7\">\n\t\t\t\t\t\t\t<label>Email ID</label>\n\t\t\t\t\t\t\t<input type=\"text\" value=\"{{student?.email_id}}\" class=\"form-control\" name=\"email_id\" [(ngModel)]=\"std.email_id\" id=\"email_id\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-5\">\n\t\t\t\t\t\t\t<label>Phone Number</label>\n\t\t\t\t\t\t\t<input type=\"text\" value=\"{{student?.phoneNumber}}\" class=\"form-control\" name=\"phoneNumber\" [(ngModel)]=\"std.phoneNumber\" id=\"phoneNumber\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Objective</label>\n\t\t\t\t\t\t<textarea value=\"{{student?.objective}}\" class=\"form-control\" name=\"objective\" [(ngModel)]=\"std.objective\" id=\"objective\"></textarea><br>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Degree/Examination</th>\n\t\t\t\t\t\t\t\t<th>Board/University</th>\n\t\t\t\t\t\t\t\t<th>Institute</th>\n\t\t\t\t\t\t\t\t<th>Year Of Passing</th>\n\t\t\t\t\t\t\t\t<th>Marks</th>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"text\" value=\"{{student?.degree}}\" class=\"form-control\" name=\"degree\" [(ngModel)]=\"std.degree\" id=\"degree\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td><div class=\"form-group\"><input type=\"text\" value=\"{{student?.board}}\" class=\"form-control\" name=\"board\" [(ngModel)]=\"std.board\" id=\"board\"></div></td>\n\t\t\t\t\t\t\t\t<td><div class=\"form-group\"><input type=\"text\" value=\"{{student?.institute}}\" class=\"form-control\" name=\"institute\" [(ngModel)]=\"std.institute\" id=\"institute\"></div></td>\n\t\t\t\t\t\t\t\t<td><div class=\"form-group\"><input type=\"text\" value=\"{{student?.yearOfPassing}}\" class=\"form-control\" name=\"yearOfPassing\" [(ngModel)]=\"std.yearOfPassing\" id=\"yearOfPassing\"></div></td>\n\t\t\t\t\t\t\t\t<td><div class=\"form-group\"><input type=\"text\" value=\"{{student?.marks}}\" class=\"form-control\" name=\"marks\" [(ngModel)]=\"std.marks\" id=\"marks\"></div></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td><div class=\"form-group\"><input type=\"text\" value=\"{{student?.degree1}}\" class=\"form-control\" name=\"degree1\" [(ngModel)]=\"std.degree1\" id=\"degree1\"></div></td>\n\t\t\t\t\t\t\t\t<td><div class=\"form-group\"><input type=\"text\" value=\"{{student?.board1}}\" class=\"form-control\" name=\"board1\" [(ngModel)]=\"std.board1\" id=\"board1\"></div></td>\n\t\t\t\t\t\t\t\t<td><div class=\"form-group\"><input type=\"text\" value=\"{{student?.institute1}}\" class=\"form-control\" name=\"institute1\" [(ngModel)]=\"std.institute1\" id=\"institute1\"></div></td>\n\t\t\t\t\t\t\t\t<td><div class=\"form-group\"><input type=\"text\" value=\"{{student?.yearOfPassing1}}\" class=\"form-control\" name=\"yearOfPassing1\" [(ngModel)]=\"std.yearOfPassing1\" id=\"yearOfPassing1\"></div></td>\n\t\t\t\t\t\t\t\t<td><div class=\"form-group\"><input type=\"text\" value=\"{{student?.marks1}}\" class=\"form-control\" name=\"marks1\" [(ngModel)]=\"std.marks1\" id=\"marks1\"></div></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td><div class=\"form-group\"><input type=\"text\" value=\"{{student?.degree2}}\" class=\"form-control\" name=\"degree2\" [(ngModel)]=\"std.degree2\" id=\"degree2\"></div></td>\n\t\t\t\t\t\t\t\t<td><div class=\"form-group\"><input type=\"text\" value=\"{{student?.board2}}\" class=\"form-control\" name=\"board2\" [(ngModel)]=\"std.board2\" id=\"board2\"></div></td>\n\t\t\t\t\t\t\t\t<td><div class=\"form-group\"><input type=\"text\" value=\"{{student?.institute2}}\" class=\"form-control\" name=\"institute2\" [(ngModel)]=\"std.institute2\" id=\"institute2\"></div></td>\n\t\t\t\t\t\t\t\t<td><div class=\"form-group\"><input type=\"text\" value=\"{{student?.yearOfPassing2}}\" class=\"form-control\" name=\"yearOfPassing2\" [(ngModel)]=\"std.yearOfPassing2\" id=\"yearOfPassing2\"></div></td>\n\t\t\t\t\t\t\t\t<td><div class=\"form-group\"><input type=\"text\" value=\"{{student?.marks2}}\" class=\"form-control\" name=\"marks2\" [(ngModel)]=\"std.marks2\" id=\"marks2\"></div></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td><div class=\"form-group\"><input type=\"text\" value=\"{{student?.degree3}}\" class=\"form-control\" name=\"degree3\" [(ngModel)]=\"std.degree3\" id=\"degree3\"></div></td>\n\t\t\t\t\t\t\t\t<td><div class=\"form-group\"><input type=\"text\" value=\"{{student?.board3}}\" class=\"form-control\" name=\"board3\" [(ngModel)]=\"std.board3\" id=\"board3\"></div></td>\n\t\t\t\t\t\t\t\t<td><div class=\"form-group\"><input type=\"text\" value=\"{{student?.institute3}}\" class=\"form-control\" name=\"institute3\" [(ngModel)]=\"std.institute3\" id=\"institute3\"></div></td>\n\t\t\t\t\t\t\t\t<td><div class=\"form-group\"><input type=\"text\" value=\"{{student?.yearOfPassing3}}\" class=\"form-control\" name=\"yearOfPassing3\" [(ngModel)]=\"std.yearOfPassing3\" id=\"yearOfPassing3\"></div></td>\n\t\t\t\t\t\t\t\t<td><div class=\"form-group\"><input type=\"text\" value=\"{{student?.marks3}}\" class=\"form-control\" name=\"marks3\" [(ngModel)]=\"std.marks3\" id=\"marks3\"></div></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<section>\n\t\t\t\t\t\t\t<h4>Training/Certificates:</h4>\n\t\t\t\t\t\t\t<textarea rows=\"6\" value=\"{{student?.training}}\" name='myInputs[]' class='form-control' name=\"training\" [(ngModel)]=\"std.training\" id=\"training\"></textarea>\n\t\t\t\t\t\t</section>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<section>\n\t\t\t\t\t\t\t<h4>Skills/Competencies:</h4>\n\t\t\t\t\t\t\t<textarea rows=\"6\" value=\"{{student?.skills}}\" class=\"form-control\" name=\"skills\" [(ngModel)]=\"std.skills\" id=\"skills\"></textarea>\n\t\t\t\t\t\t</section>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<section>\n\t\t\t\t\t\t\t<h4>Projects:</h4>\n\t\t\t\t\t\t\t<textarea rows=\"6\" value=\"{{student?.projects}}\" class=\"form-control\" name=\"projects\" [(ngModel)]=\"std.projects\" id=\"projects\"></textarea>\n\t\t\t\t\t\t</section>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<section>\n\t\t\t\t\t\t\t<h4>Activities</h4>\n\t\t\t\t\t\t\t<textarea rows=\"6\" value=\"{{student?.activities}}\" class=\"form-control\" name=\"activities\" [(ngModel)]=\"std.activities\" id=\"activities\"></textarea>\n\t\t\t\t\t\t</section>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<section>\n\t\t\t\t\t\t\t<h4>Hobbies/Interest:</h4>\n\t\t\t\t\t\t\t<textarea rows=\"6\" value=\"{{student?.hobbies}}\" class=\"form-control\" name=\"hobbies\" [(ngModel)]=\"std.hobbies\" id=\"hobbies\"></textarea>\n\t\t\t\t\t\t</section>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary pull-right\">Update Profile</button>\n\t                <div class=\"clearfix\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t</form>\t\t\t\t\n\t</div>\n    ",
        providers: [drive_service_1.DriveService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, drive_service_1.DriveService, router_1.ActivatedRoute,
        router_1.Router])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map