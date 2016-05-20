//= wrapped

angular
    .module("test.app.part")
    .factory("Part", Part);

function Part($resource, PartType) {
    var Part = $resource(
        "part/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true, transformResponse: [angular.fromJson, transformPartType]},
         "get": {method: 'GET', transformResponse: [angular.fromJson, convertToPartType]}}
    );

    Part.list = Part.query;

    Part.prototype.toString = function() {
        return 'test.app.Part : ' + (this.id ? this.id : '(unsaved)');
    };
    
    function convertToPartType(part) {
        part.partType = new PartType(part.partType);
        return part;
    }
    function transformPartType(partList) {
        return partList.map(convertToPartType);
    }
    
    return Part;
}
