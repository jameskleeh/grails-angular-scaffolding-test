//= wrapped

angular
    .module("test.app.toy")
    .factory("Toy", Toy);

function Toy($resource) {
    var Toy = $resource(
        "toy/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "list": {method: "GET", isArray: true}}
    );
    return Toy;
}
