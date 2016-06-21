//= wrapped

angular
    .module("com.myblog.tag")
    .factory("Tag", Tag);

function Tag($resource) {
    var Tag = $resource(
        "post/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Tag.list = Tag.query;

    Tag.prototype.toString = function() {
        return 'com.myblog.Tag : ' + (this.id ? this.id : '(unsaved)');
    };

    return Tag;
}
