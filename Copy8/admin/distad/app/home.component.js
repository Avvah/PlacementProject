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
var authentication_service_1 = require('./authentication.service');
var router_1 = require('@angular/router');
var drive_service_1 = require('./drive.service');
var angular2_toaster_1 = require('angular2-toaster/angular2-toaster');
var ng2_file_upload_1 = require('ng2-file-upload');
var HomeComponent = (function () {
    function HomeComponent(service, route, driveservice) {
        this.service = service;
        this.route = route;
        this.driveservice = driveservice;
        //
        this.uploader = new ng2_file_upload_1.FileUploader({ url: 'http://localhost:8123/api/student/inBulk' });
        this.toasterconfig = new angular2_toaster_1.ToasterConfig({
            showCloseButton: true,
            tapToDismiss: false,
            timeout: 3000,
            positionClass: 'toast-bottom-left'
        });
    }
    // uploadFile: any;
    // hasBaseDropZoneOver: boolean = false;
    // options: Object = {
    // 		url: 'http://localhost:8123/api/student/inBulk'
    // 	};
    // 	sizeLimit = 2000000;
    // 	handleUpload(data): void {
    // 	if (data && data.response) {
    // 		data = JSON.parse(data.response);
    // 		this.uploadFile = data;
    // 	}
    // 	}
    // 	fileOverBase(e:any):void {
    // 	this.hasBaseDropZoneOver = e;
    // 	}s
    HomeComponent.prototype.checkCredential = function () {
        if (localStorage.getItem("userid") === null) {
            return true;
        }
        else {
            return false;
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.service.checkCredentials();
        if (!this.service.checkCredentials()) {
            console.log("Entered app crendtials");
            this.route.navigate(['login']);
        }
    };
    HomeComponent.prototype.logout = function () {
        this.service.logout();
        if (this.service.logout()) {
            console.log("Admin is Logging Out...");
            this.route.navigate(['login']);
        }
    };
    HomeComponent.prototype.inviteStudents = function () {
        this.studs = [(this.usn), (this.email)];
        this.sach = "{\"usn\":\"" + this.usn + "\",\"email\":\"" + this.email + "\"}";
        console.log(this.sach);
        this.addstud(this.sach);
    };
    HomeComponent.prototype.addstud = function (sach) {
        this.driveservice.addstud(sach);
    };
    HomeComponent.prototype.addClassFile = function (classFile) {
        this.driveservice.addClassFile(classFile);
    };
    //onChange file listener
    HomeComponent.prototype.changeListener = function (fileInput) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();
            console.log(fileInput.target.files[0]);
            console.log(fileInput);
            this.addClassFile(fileInput.target.files[0]);
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-appp',
            styleUrls: ['app/public/css/home.component.css'],
            templateUrl: 'app/public/htmlTemplates/home.component.html',
            providers: [authentication_service_1.AuthenticationService]
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router, drive_service_1.DriveService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map