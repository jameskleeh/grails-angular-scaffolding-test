//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /test/app/core/test.app.core
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("test.app.tag", ["ui.router", "test.app.core"]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('tag', {
            url: "/tag",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('tag.list', {
            url: "",
            templateUrl: "/test/app/tag/list.html",
            controller: "TagListController as vm"
        })
        .state('tag.create', {
            url: "/create",
            templateUrl: "/test/app/tag/create.html",
            controller: "TagCreateController as vm"
        })
        .state('tag.edit', {
            url: "/edit/:id",
            templateUrl: "/test/app/tag/edit.html",
            controller: "TagEditController as vm"
        })
        .state('tag.show', {
            url: "/show/:id",
            templateUrl: "/test/app/tag/show.html",
            controller: "TagShowController as vm"
        });
}
