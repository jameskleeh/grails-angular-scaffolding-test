//= wrapped

angular
    .module("test.app.subPart")
    .factory("SubPart", SubPart);

function SubPart($resource, domainListConversion, domainConversion) {
    var SubPart = $resource(
        "subPart/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true, transformResponse: [angular.fromJson, domainListConversion("Part", "mainPart", "domainConversion")]},
         "get": {method: 'GET', transformResponse: [angular.fromJson, domainConversion("Part", "mainPart")]}}
    );

    SubPart.list = SubPart.query;

    SubPart.prototype.toString = function() {
        return 'test.app.SubPart : ' + (this.id ? this.id : '(unsaved)');
    };

    return SubPart;
}
