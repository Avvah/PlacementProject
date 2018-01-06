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
var driveComponent = (function () {
    function driveComponent(driveService) {
        this.driveService = driveService;
        this.companyArrays = [];
    }
    ;
    driveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.driveService.getCompanyMockArray()
            .subscribe(function (s) { return _this.companyArrays = s; }, function (err) { return console.log(err); });
    };
    driveComponent = __decorate([
        core_1.Component({
            selector: 's-drive',
            styleUrls: ['app/public/css/drive.component.css'],
            template: "\n    <div class=\"container-fluid\">\n\t    <div class=\"row\">\n\t        <div class=\"col-md-12\">\n\t            <div class=\"card\">\n\t                <div class=\"card-header\" data-background-color=\"blue\">\n\t                    <h4 class=\"title\">Upcoming Placement Drives</h4>\n\t                    <p class=\"category\">These are the list of upcoming events</p>\n\t                </div>\n\t                <div class=\"card-content table-responsive\">\n\t                    <table class=\"table\">\t\n\t                        <thead class=\"text-primary\">\n\t                            <th col width =\"60\">Sl.No</th>\n\t                            <th col width =\"150\">Company Name</th>\n\t                            <th col width =\"150\">Company Location</th>\n\t\t\t\t\t\t\t\t<th col width =\"70\">Cut Off</th>\n\t\t\t\t\t\t\t\t<th col width =\"90\">Branches</th>\n\t\t\t\t\t\t\t\t<th col width =\"90\">Date</th>\n\t\t\t\t\t\t\t\t<th col width =\"90\">Report Time</th>\n\t\t\t\t\t\t\t\t<th col width =\"130\">Venue</th>\n\t                        </thead>\n\t                        <tbody>\n\t                            <tr *ngFor=\"let companyArray of companyArrays\" >\n\t                                <td col width =\"60\">*</td>\n\t                            \t<td col width =\"150\">{{companyArray.name}}</td>\n\t                            \t<td col width =\"150\">{{companyArray.location}}</td>\n\t\t\t\t\t\t\t\t\t<td col width =\"70\">{{companyArray.cutOff}}</td>\n\t\t\t\t\t\t\t\t\t<td col width =\"90\">{{companyArray.branch}}</td>\n                                  \t<td col width =\"90\">{{companyArray.date}}</td>\n                                 \t<td col width =\"90\">{{companyArray.time}}</td>\n\t\t\t\t\t\t\t\t\t<td col width =\"130\">{{companyArray.venue}}</td>\n\t\t\t\t\t\t\t\t</tr>\n\t                        </tbody>\n\t                    </table>\n\t                </div>\n\t            </div>\n\t        </div>\n        </div>\n    </div>\n    ",
            providers: [drive_service_1.DriveService]
        }), 
        __metadata('design:paramtypes', [drive_service_1.DriveService])
    ], driveComponent);
    return driveComponent;
}());
exports.driveComponent = driveComponent;
//# sourceMappingURL=s-drive.component.js.map