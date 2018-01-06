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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var drive_service_1 = require('./drive.service');
var authentication_service_1 = require('./authentication.service');
var angular2_toaster_1 = require('angular2-toaster/angular2-toaster');
var ProfileComponent = (function () {
    function ProfileComponent(_fb, driveservice, route, router, tosterservice, auth) {
        this._fb = _fb;
        this.driveservice = driveservice;
        this.route = route;
        this.router = router;
        this.tosterservice = tosterservice;
        this.auth = auth;
        this.src = "";
        this.events = []; // use later to display form changes
        this.sid = this.route.snapshot.params['id'];
        this.std = { id: this.sid };
        this.id = route.snapshot.params['id'];
        console.log(this.id);
        this.toasterService = tosterservice;
    }
    ProfileComponent.prototype.onSubmit = function () {
        this.addstudentProfile(this.std);
        console.log(this.std);
    };
    ProfileComponent.prototype.addstudentProfile = function (std) {
        var _this = this;
        this.driveservice.addstudentProfile(std)
            .subscribe(function (response) {
            console.log("VALUE RECEIVED: " + response);
            _this.toasterService.pop('success', 'Updated', 'Profile was updated Sucessfully');
        }, function (err) {
            console.log("ERROR: " + err);
            _this.toasterService.pop('error', 'Error', 'Some problem occured while updating. Try Again.');
        }, function () {
            console.log("COMPLETED");
        });
        ;
    };
    ProfileComponent.prototype.addStudentImage = function (id, imageFile) {
        this.driveservice.addStudentImage(id, imageFile);
        console.log(id);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.auth.checkCredentials()) {
            console.log("ummmm");
            this.router.navigate(['login']);
        }
        this.sid;
        this.driveservice.getdataforresume(this.sid).subscribe(function (student) {
            _this.student = student;
            console.log(student);
        }, function (err) { return console.log(err); });
        console.log("IM REACHED");
    };
    //onChange file listener
    ProfileComponent.prototype.changeListener = function (fileInput) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();
            console.log(fileInput.target.files[0]);
            console.log(fileInput);
            this.src = fileInput.target.files[0];
            this.addStudentImage(this.sid, fileInput.target.files[0]);
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile-view',
            styleUrls: ['app/public/css/profile.component.css'],
            templateUrl: 'app/public/htmlTemplates/profile.component.html',
            providers: [drive_service_1.DriveService, authentication_service_1.AuthenticationService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, drive_service_1.DriveService, router_1.ActivatedRoute, router_1.Router, angular2_toaster_1.ToasterService, authentication_service_1.AuthenticationService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map