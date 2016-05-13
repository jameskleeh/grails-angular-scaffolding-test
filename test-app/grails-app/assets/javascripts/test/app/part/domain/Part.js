//= wrapped

angular
    .module("test.app.part")
    .factory("Part", Part);

function Part($resource) {
    var Part = $resource(
        "part/:id",
        {"id": "@id"},
        {"update": {method: "PUT"}, "list": {method: "GET", isArray: true}}
    );
    return Part;
}