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
var UpdateCompanyProfileComponent = (function () {
    function UpdateCompanyProfileComponent(driveService, tosterservice, router, route) {
        this.driveService = driveService;
        this.tosterservice = tosterservice;
        this.router = router;
        this.route = route;
        this.cid = this.router.snapshot.params['id'];
        this.comp = { id: this.cid };
        this.toasterconfig = new angular2_toaster_1.ToasterConfig({
            showCloseButton: true,
            tapToDismiss: false,
            timeout: 0,
            positionClass: 'toast-bottom-right'
        });
        this.toasterService = tosterservice;
        this.id = router.snapshot.params['id'];
        console.log(this.id);
    }
    ;
    UpdateCompanyProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem("userid") === null) {
            console.log("ummmm");
            this.route.navigate(['login']);
        }
        console.log(this.cid);
        this.driveService.getdataforcompany(this.cid)
            .subscribe(function (company) {
            _this.company = company;
            console.log(company);
        }, function (err) { return console.log(err); });
        console.log("IM REACHED");
    };
    UpdateCompanyProfileComponent.prototype.onSubmitTemplateBased = function () {
        this.update(this.comp);
        console.log(this.comp);
    };
    UpdateCompanyProfileComponent.prototype.update = function (comp) {
        this.driveService.updateCompany(comp);
    };
    UpdateCompanyProfileComponent = __decorate([
        core_1.Component({
            selector: 'update-company-profile',
            templateUrl: 'app/public/htmlTemplates/update-company-profile.component.html',
            providers: [drive_service_1.DriveService]
        }), 
        __metadata('design:paramtypes', [drive_service_1.DriveService, angular2_toaster_1.ToasterService, router_1.ActivatedRoute, router_1.Router])
    ], UpdateCompanyProfileComponent);
    return UpdateCompanyProfileComponent;
}());
exports.UpdateCompanyProfileComponent = UpdateCompanyProfileComponent;
//# sourceMappingURL=update-company-profile.component.js.map