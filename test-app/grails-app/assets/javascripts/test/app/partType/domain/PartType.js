//= wrapped

angular
    .module("test.app.partType")
    .factory("PartType", PartType);

function PartType($resource) {
    var PartType = $resource(
        "partType/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    PartType.list = PartType.query;

    PartType.prototype.toString = function() {
        return 'test.app.PartType : ' + (this.id ? this.id : '(unsaved)');
    };
    
    return PartType;
}
