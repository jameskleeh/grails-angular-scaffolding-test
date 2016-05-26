//= wrapped

angular
    .module("test.app.part")
    .factory("Part", Part);

function Part($resource, domainListConversion, domainToManyConversion, domainConversion) {
    var Part = $resource(
        "part/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true, transformResponse: [angular.fromJson, domainListConversion("Tag", "tallyWags", "domainToManyConversion"), domainListConversion("PartType", "foo", "domainConversion"), domainListConversion("SubPart", "bars", "domainToManyConversion")]},
         "get": {method: 'GET', transformResponse: [angular.fromJson, domainToManyConversion("Tag", "tallyWags"), domainConversion("PartType", "foo"), domainToManyConversion("SubPart", "bars")]}}
    );

    Part.list = Part.query;

    Part.prototype.toString = function() {
        return 'test.app.Part : ' + (this.id ? this.id : '(unsaved)');
    };

    return Part;
}
