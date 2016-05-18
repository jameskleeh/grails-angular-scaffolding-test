//= wrapped

angular
    .module("test.app.partType")
    .factory("PartType", PartType);

function PartType($resource) {
    var PartType = $resource(
        "partType/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "list": {method: "GET", isArray: true}}
    );
    return PartType;
}
