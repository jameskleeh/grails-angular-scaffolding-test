//= wrapped

angular
    .module("test.app.post")
    .factory("Post", Post);

function Post($resource, domainListConversion, domainToManyConversion) {
    var Post = $resource(
        "part/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true, transformResponse: [angular.fromJson, domainListConversion("Tag", "tags", "domainToManyConversion")]},
         "get": {method: 'GET', transformResponse: [angular.fromJson, domainToManyConversion("Tag", "tags")]}}
    );

    Post.list = Post.query;

    Post.prototype.toString = function() {
        return 'test.app.Post : ' + (this.id ? this.id : '(unsaved)');
    };

    return Post;
}
