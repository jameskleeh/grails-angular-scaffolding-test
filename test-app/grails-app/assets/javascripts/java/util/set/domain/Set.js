//= wrapped

angular
    .module("java.util.set")
    .factory("Set", Set);

function Set($resource) {
    var Set = $resource(
        "set/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Set.list = Set.query;

    Set.prototype.toString = function() {
        return 'java.util.Set : ' + (this.id ? this.id : '(unsaved)');
    };
    
    return Set;
}
