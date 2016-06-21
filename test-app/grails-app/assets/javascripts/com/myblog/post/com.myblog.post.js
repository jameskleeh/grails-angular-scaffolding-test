//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /com/myblog/core/com.myblog.core
//= require /com/myblog/tag/com.myblog.tag
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("com.myblog.post", [
    "ui.router",
    "com.myblog.core",
    "com.myblog.tag"
]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('post', {
            url: "/post",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('post.list', {
            url: "",
            templateUrl: "/com/myblog/post/list.html",
            controller: "PostListController as vm"
        })
        .state('post.create', {
            url: "/create",
            templateUrl: "/com/myblog/post/create.html",
            controller: "PostCreateController as vm"
        })
        .state('post.edit', {
            url: "/edit/:id",
            templateUrl: "/com/myblog/post/edit.html",
            controller: "PostEditController as vm"
        })
        .state('post.show', {
            url: "/show/:id",
            templateUrl: "/com/myblog/post/show.html",
            controller: "PostShowController as vm"
        });
}
