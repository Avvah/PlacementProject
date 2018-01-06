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
var companiesComponent = (function () {
    function companiesComponent() {
        this.companies = [
            { "si": "1", "name": "Rubixoft Technologies", "location": "Mangalore", "status": "verified" },
            { "si": "2", "name": "Tech Mahindra", "location": "Mumbai", "status": "verified" }
        ];
    }
    companiesComponent = __decorate([
        core_1.Component({
            selector: 'companies',
            styleUrls: ['app/public/css/companies.component.css'],
            template: "\n    \n    <div class=\"container-fluid\">\n\t                <div class=\"row\">\n\t                    <div class=\"col-md-12\">\n\t                        <div class=\"card\">\n\t                            <div class=\"card-header\" data-background-color=\"blue\">\n\t                                <h4 class=\"title\">Companies</h4>\n\t                                <p class=\"category\">This is a list of companies registered.</p>\n\t                            </div>\n\t                            <div class=\"card-content table-responsive\">\n\t                                <table class=\"table\">\n\t                                    <thead class=\"text-primary\">\n\t                                    \t<th>Sl.No</th>\n\t                                    \t<th>Company</th>\n\t                                    \t<th>Location</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t                                    </thead>\n\t                                    <tbody>\n\t                                        <tr *ngFor=\"let company of companies\">\n\t                                        \t<td>{{company.si}}</td>\n\t                                        \t<td>{{company.name}}</td>\n\t                                        \t<td>{{company.location}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-primary\">{{company.status}}</td>\n\t                                        </tr>\n\t                                    </tbody>\n\t                                </table>\n\n\t                            </div>\n\t                        </div>\n\t\t\t\t\t\t\t<button type=\"submit\"><a  routerLink=\"/home/company/add\">Add Company</a></button>\n\t                    </div>\n                    </div>\n                </div>\n            \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], companiesComponent);
    return companiesComponent;
}());
exports.companiesComponent = companiesComponent;
//# sourceMappingURL=companies.component.js.map