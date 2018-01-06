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
var contact_model_1 = require('./contact.model');
var ContactComponent = (function () {
    function ContactComponent() {
        this.contact = {
            name: "shamnas",
            phone: 7204320373
        };
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof contact_model_1.Contact !== 'undefined' && contact_model_1.Contact) === 'function' && _a) || Object)
    ], ContactComponent.prototype, "contact", void 0);
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contact',
            styleUrls: ['app/public/contact.component.css'],
            template: "\n    <div class=\"det\">\n    <div class=\"img\">\n    <img src=\"app/public/images/a6.png\">\n    </div>\n    <div class=\"more_det\">\n    <h2>{{contact.name}}</h2>\n    <p>Phone : {{contact.phone}}</p>\n    </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
    var _a;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map