//= wrapped

angular
    .module("test.app.tag")
    .factory("Tag", Tag);

function Tag($resource) {
    var Tag = $resource(
        "tag/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Tag.list = Tag.query;

    Tag.prototype.toString = function() {
        return 'test.app.Tag : ' + (this.id ? this.id : '(unsaved)');
    };

    return Tag;
}
