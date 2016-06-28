//= wrapped
//= require /angular/angular
//= require /angular/angular-ui-router
//= require /com/myblog/index/com.myblog.index
//= require /com/myblog/tag/com.myblog.tag
//= require /com/myblog/post/com.myblog.post

angular.module("com.myblog", [
    "com.myblog.index",
    "com.myblog.tag",
    "com.myblog.post",
]);