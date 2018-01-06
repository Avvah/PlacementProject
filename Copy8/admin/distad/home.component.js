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
var angular2_jwt_1 = require('angular2-jwt');
var auth_guard_1 = require('./auth.guard');
var HomeComponent = (function () {
    function HomeComponent(service, route, driveservice, auth, authHttp, authguard) {
        this.service = service;
        this.route = route;
        this.driveservice = driveservice;
        this.auth = auth;
        this.authHttp = authHttp;
        this.authguard = authguard;
        this.data = null;
        this.someArray = {};
        this.pusharray = [];
        this.toasterconfig = new angular2_toaster_1.ToasterConfig({
            showCloseButton: true,
            tapToDismiss: false,
            timeout: 3000,
            positionClass: 'toast-bottom-left'
        });
    }
    // checkCredential(){
    // 	if(localStorage.getItem("userid")===null){
    // 		return true;
    // 	}
    // 	else{
    // 		return false;
    // 	}
    // }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.logFlag(2)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log("VALUE RECEIVED: " + response);
            console.log("Particular Data");
            _this.authguard.logFlag = response;
        }, function (err) {
            console.log("ERROR: " + err);
        }, function () {
            console.log("COMPLETED");
        });
        this.service.checkCredentials();
        if (!this.service.checkCredentials()) {
            console.log("Entered app crendtials");
            this.route.navigate(['login']);
        }
        // else{
        // 	this.authguard.logFlag = 1;
        // }
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        var user_id = localStorage.getItem("userid");
        console.log(user_id);
        this.service.logout(user_id)
            .subscribe(function (response) {
            console.log("VALUE RECEIVED: " + response);
            console.log("Particular Data");
            console.log(response);
            _this.service.logFlag(0)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                console.log("VALUE RECEIVED: " + response);
                console.log("Particular Data");
                _this.authguard.logFlag = response;
            }, function (err) {
                console.log("ERROR: " + err);
            }, function () {
                console.log("COMPLETED");
            });
            _this.authguard.logFlag = 0;
            localStorage.removeItem("userid");
            console.log(localStorage.getItem("userid"));
            console.log("Admin is Logging Out...");
            _this.route.navigate(['login']);
        }, function (err) {
            console.log("ERROR: " + err);
        }, function () {
            console.log("COMPLETED");
        });
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
    // changeListener(fileInput: any){
    // 	if (fileInput.target.files && fileInput.target.files[0])
    // 	{
    // 		var reader = new FileReader();
    // 		console.log(fileInput.target.files[0]);
    // 		console.log(fileInput);
    // 		this.addClassFile(fileInput.target.files[0])
    // 		reader.readAsDataURL(fileInput.target.files[0]);
    // 	}
    // }
    HomeComponent.prototype.changeListener = function ($event) {
        console.log("In Change listener function");
        this.readThis($event.target);
    };
    HomeComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        console.log("In readThis function");
        var file = inputValue.files[0];
        var fileDisplayArea = document.getElementById('fileDisplayArea');
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            // you can perform an action with readed data here
            console.log(myReader.result);
            var csvData = myReader.result;
            fileDisplayArea.innerText = myReader.result;
            //   this.data = $.csv.toObjects(csvData);
            //   this.addClassFile(this.data);
            //   console.log(this.data)
            //   if (this.data && this.data.length > 0) {
            //             alert('Imported -' + this.data.length + '- rows successfully!');
            //         } else {
            //             alert('No data to import!');
            //        }
            var i;
            var str = fileDisplayArea.innerText;
            var res = str.split("\n");
            console.log(res);
            console.log(res[0]);
            console.log(res.length);
            for (i = 0; i < res.length; i++) {
                var res1 = res[i].split(",");
                console.log(res1);
                _this.pusharray.push({ usn: res1[0], email: res1[1] });
            }
            console.log(_this.pusharray);
            _this.someArray = [(fileDisplayArea.innerText)];
            console.log(_this.someArray);
        };
        console.log(myReader.readAsText(file));
    };
    HomeComponent.prototype.uploadStudents = function () {
        this.addClassFile(this.pusharray);
    };
    HomeComponent.prototype.openTab = function (evt, entryName) {
        // Declare all variables
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        // Show the current tab, and add an "active" class to the link that opened the tab
        document.getElementById(entryName).style.display = "block";
        //evt.currentTarget.className += " active";
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-appp',
            styleUrls: ['app/public/css/home.component.css'],
            templateUrl: 'app/public/htmlTemplates/home.component.html',
            providers: [authentication_service_1.AuthenticationService]
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router, drive_service_1.DriveService, authentication_service_1.AuthenticationService, angular2_jwt_1.AuthHttp, auth_guard_1.AuthGuard])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map