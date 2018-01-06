"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var companyArra = [
            { name: 'Rubixoft Technologies', location: 'Mangalore', cutOff: '123', branch: 'cs', roundDetails: 'NIL', skills: 'NIL', package: 'NIL', date: '01-01-2017', time: '6:00 am', venue: 'Kankanady' },
            { name: 'Tech Mahindra', location: 'Pune', cutOff: '123', branch: 'cs', roundDetails: 'NIL', skills: 'NIL', package: 'NIL', date: '01-03-2017', time: '10:00 am', venue: 'abst' }
        ];
        return [companyArra];
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map