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
var angular2_toaster_1 = require('angular2-toaster/angular2-toaster');
var router_1 = require('@angular/router');
var authentication_service_1 = require('./authentication.service');
var angular2_jwt_1 = require('angular2-jwt');
var CompanyProfileComponent = (function () {
    function CompanyProfileComponent(driveService, tosterservice, router, authHttp, route, auth) {
        this.driveService = driveService;
        this.tosterservice = tosterservice;
        this.router = router;
        this.authHttp = authHttp;
        this.route = route;
        this.auth = auth;
        this.comp = {};
        this.tags = ['Car', 'Bus', 'Train'];
        this.expanded = false;
        this.toasterService = tosterservice;
        this.id = router.snapshot.params['id'];
        console.log(this.id);
    }
    ;
    // ngOnInit(){
    //     if(!this.auth.checkCredentials()){
    //         this.route.navigate[('login')]
    //     }
    // } 
    CompanyProfileComponent.prototype.onSubmitTemplateBased = function () {
        this.add(this.comp);
        console.log(this.comp);
    };
    CompanyProfileComponent.prototype.add = function (comp) {
        var _this = this;
        this.driveService.add(comp)
            .map(function (res) { return res; })
            .subscribe(function (response) {
            /* this function is executed every time there's a new output */
            console.log("VALUE RECEIVED: " + response);
            //    location.reload();
            _this.toasterService.pop('success', 'Added', 'Company Added Sucessfully');
        }, function (err) {
            /* this function is executed when there's an ERROR */
            console.log("ERROR: " + err);
        }, function () {
            /* this function is executed when the observable ends (completes) its stream */
            console.log("COMPLETED");
        });
    };
    // Adding more fields
    CompanyProfileComponent.prototype.addfield = function () {
        var html = "<input type='text' class='form-control' name = 'roundDetails' [(ngModel)]='comp.roundDetails'>";
        $('#fields').append(html);
    };
    CompanyProfileComponent.prototype.showCheckBox = function () {
        var checkBoxes = document.getElementById('checkBoxes');
        if (!this.expanded) {
            checkBoxes.style.display = "block";
            this.expanded = true;
        }
        else {
            checkBoxes.style.display = "none";
            this.expanded = false;
        }
    };
    CompanyProfileComponent = __decorate([
        core_1.Component({
            selector: 'company-profile',
            styleUrls: ['app/public/css/company-profile.component.css'],
            templateUrl: 'app/public/htmlTemplates/company-profile.component.html',
            providers: [drive_service_1.DriveService]
        }), 
        __metadata('design:paramtypes', [drive_service_1.DriveService, angular2_toaster_1.ToasterService, router_1.ActivatedRoute, angular2_jwt_1.AuthHttp, router_1.Router, authentication_service_1.AuthenticationService])
    ], CompanyProfileComponent);
    return CompanyProfileComponent;
}());
exports.CompanyProfileComponent = CompanyProfileComponent;
//# sourceMappingURL=company-profile.component.js.map