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
var router_1 = require('@angular/router');
var angular2_toaster_1 = require('angular2-toaster/angular2-toaster');
var driveComponent = (function () {
    function driveComponent(driveService, route, toasterService) {
        this.driveService = driveService;
        this.route = route;
        this.companyArrays = [];
        this.filteredArrays = [];
        this.toasterService = toasterService;
    }
    ;
    driveComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem("userid") === null) {
            console.log("ummmm");
            this.route.navigate(['login']);
        }
        this.driveService.getCompanyMockArray()
            .subscribe(function (s) {
            _this.companyArrays = s;
            console.log(_this.companyArrays);
        }, function (err) { return console.log(err); });
        this.driveService.getdataforresume().subscribe(function (student) {
            _this.student = student;
            console.log(student);
            var i, j = 0;
            console.log(_this.companyArrays.length, _this.student.marks);
            for (i = 0; i < _this.companyArrays.length; i++) {
                if ((_this.companyArrays[i].cutOffS <= _this.student.marks || _this.companyArrays[i].cutOffS === "No Cut Off")
                    && (_this.companyArrays[i].cutOffP <= _this.student.marks1 || _this.companyArrays[i].cutOffP === "No Cut Off")
                    && (_this.companyArrays[i].cutOffD <= _this.student.marks2 || _this.companyArrays[i].cutOffD === "No Cut Off")) {
                    _this.filteredArrays[j] = _this.companyArrays[i];
                    j++;
                }
            }
        }, function (err) { return console.log(err); });
        console.log("IM REACHED");
    };
    driveComponent = __decorate([
        core_1.Component({
            selector: 'drive',
            styleUrls: ['app/public/css/drive.component.css'],
            template: "\n\t<!--<toaster-container></toaster-container>\n\t<button type = 'button' (click)=\"pop()\">toast</button>-->\n    <div class=\"container-fluid\">\n\t    <div class=\"row\">\n\t        <div class=\"col-md-12\">\n\t            <div class=\"card\">\n\t              <!--  <div class=\"card-header\" data-background-color=\"blue\">\n\t                    <h4 class=\"title\">Upcoming Placement Drives</h4>\n\t                    <p class=\"category\">These are the list of upcoming events</p>\n\t                </div>-->\n\t                <div class=\"card-content table-responsive\">\n\t                    <table class=\"table\">\t\n\t                        <thead class=\"text-primary\" id=\"table-head\">\n\t                            <th col width =\"60\">Sl.No</th>\n\t                            <th col width =\"150\">Company Name</th>\n\t                            <th col width =\"150\">Company Location</th>\n\t\t\t\t\t\t\t\t<th col width =\"70\">Cut Off</th>\n\t\t\t\t\t\t\t\t<th col width =\"90\">Branches</th>\n\t\t\t\t\t\t\t\t<th col width =\"90\">Date</th>\n\t\t\t\t\t\t\t\t<th col width =\"90\">Report Time</th>\n\t\t\t\t\t\t\t\t<th col width =\"130\">Venue</th>\n\t                        </thead>\n\t                        <tbody id=\"table-content\">\n\t                            <tr *ngFor=\"let filteredArray of filteredArrays\">\n\t                                <td col width =\"60\">*</td>\n\t                            \t<td col width =\"150\">{{filteredArray.name}}</td>\n\t                            \t<td col width =\"150\">{{filteredArray.location}}</td>\n\t\t\t\t\t\t\t\t\t<td col width =\"70\">{{filteredArray.cutOff}}</td>\n\t\t\t\t\t\t\t\t\t<td col width =\"90\">{{filteredArray.branch}}</td>\n                                  \t<td col width =\"90\">{{filteredArray.date}}</td>\n                                 \t<td col width =\"90\">{{filteredArray.time}}</td>\n\t\t\t\t\t\t\t\t\t<td col width =\"130\">{{filteredArray.venue}}</td>\t\n\t\t\t\t\t\t\t\t</tr>\n\t                        </tbody>\n\t                    </table>\n\t                </div>\n\t            </div>\n\t        </div>\n        </div>\n\t\t\n    </div>\n    ",
            providers: [drive_service_1.DriveService]
        }), 
        __metadata('design:paramtypes', [drive_service_1.DriveService, router_1.Router, angular2_toaster_1.ToasterService])
    ], driveComponent);
    return driveComponent;
}());
exports.driveComponent = driveComponent;
//# sourceMappingURL=drive.component.js.map