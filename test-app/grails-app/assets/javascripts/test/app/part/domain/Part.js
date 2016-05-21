//= wrapped

angular
    .module("test.app.part")
    .factory("Part", Part);

function Part($resource, domainListConversion, domainToManyConversion, domainConversion) {
    var queryResponseTransforms = [angular.fromJson, domainListConversion("Tag", "tallyWags", "domainToManyConversion"), domainListConversion("PartType", "foo", "domainConversion"), domainListConversion("SubPart", "bars", "domainToManyConversion")];
    var getResponseTransforms = [angular.fromJson, domainToManyConversion("Tag", "tallyWags"), domainConversion("PartType", "foo"), domainToManyConversion("SubPart", "bars")];
    var Part = $resource(
        "part/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true, transformResponse: queryResponseTransforms},
         "get": {method: 'GET', transformResponse: getResponseTransforms}}
    );

    Part.list = Part.query;

    Part.prototype.toString = function() {
        return 'test.app.Part : ' + (this.id ? this.id : '(unsaved)');
    };

    return Part;
}
