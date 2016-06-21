//= wrapped
//= require /angular/angular
//= require /test/app/core/test.app.core
//= require /test/app/index/test.app.index
//= require /test/app/part/test.app.part
//= require /test/app/tag/test.app.tag
//= require /test/app/partType/test.app.partType
//= require /test/app/subPart/test.app.subPart
//= require /test/app/post/test.app.post
//= require /test/app/comment/test.app.comment

angular.module("test.app", [
    "test.app.core",
    "test.app.index",
    "test.app.post",
    "test.app.comment",
    "test.app.tag"
]);
