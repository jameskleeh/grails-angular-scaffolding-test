//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /test/app/core/test.app.core
//= require /test/app/tag/test.app.tag
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("test.app.post", [
    "ui.router",
    "test.app.core",
    "test.app.tag"
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
            templateUrl: "/test/app/post/list.html",
            controller: "PostListController as vm"
        })
        .state('post.create', {
            url: "/create",
            templateUrl: "/test/app/post/create.html",
            controller: "PostCreateController as vm"
        })
        .state('post.edit', {
            url: "/edit/:id",
            templateUrl: "/test/app/post/edit.html",
            controller: "PostEditController as vm"
        })
        .state('post.show', {
            url: "/show/:id",
            templateUrl: "/test/app/post/show.html",
            controller: "PostShowController as vm"
        });
}
