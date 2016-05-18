//= wrapped
//= require /angular/angular 
//= require /test/app/core/test.app.core

//= require /angular/angular-ui-router
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("test.app.toy", ["test.app.core", "ui.router"])
    .config(config);

function config($stateProvider) {
    $stateProvider
        .state('toy', {
            url: "/toy",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('toy.list', {
            url: "",
            templateUrl: "/test/app/toy/list.html",
            controller: "ToyListController as vm"
        })
        .state('toy.create', {
            url: "/create",
            templateUrl: "/test/app/toy/create.html",
            controller: "ToyCreateController as vm"
        })
        .state('toy.edit', {
            url: "/edit/:id",
            templateUrl: "/test/app/toy/edit.html",
            controller: "ToyEditController as vm"
        })
        .state('toy.show', {
            url: "/show/:id",
            templateUrl: "/test/app/toy/show.html",
            controller: "ToyShowController as vm"
        });
}
