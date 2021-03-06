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
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (input, args) {
        console.log(args);
        if (input == null) {
            return null;
        }
        if (args == null) {
            //returns the same array when no args is passes ie.search box is empty
            return input;
        }
        // returns an array strats with args we passed
        return input.filter(function (student) { return student.usn.toLowerCase().startsWith(args.toLowerCase()); });
    };
    SearchPipe = __decorate([
        core_1.Pipe({
            name: "searchPipe"
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SearchPipe);
    return SearchPipe;
}());
exports.SearchPipe = SearchPipe;
//# sourceMappingURL=searchpipe.js.map