//= wrapped
//= require /angular/angular-resource

angular
    .module("com.myblog.comment")
    .factory("Comment", Comment);

function Comment($resource) {
    var Comment = $resource(
        "comment/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Comment.list = Comment.query;

    Comment.prototype.toString = function() {
        return 'com.myblog.Comment : ' + (this.id ? this.id : '(unsaved)');
    };

    return Comment;
}
