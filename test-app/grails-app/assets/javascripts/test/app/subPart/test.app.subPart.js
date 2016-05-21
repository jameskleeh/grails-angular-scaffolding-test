//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /test/app/core/test.app.core
//= require /test/app/part/test.app.part
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("test.app.subPart", [
    "ui.router",
    "test.app.core",
    "test.app.part"
]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('subPart', {
            url: "/subPart",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('subPart.list', {
            url: "",
            templateUrl: "/test/app/subPart/list.html",
            controller: "SubPartListController as vm"
        })
        .state('subPart.create', {
            url: "/create",
            params: {"mainPartId":null},
            templateUrl: "/test/app/subPart/create.html",
            controller: "SubPartCreateController as vm"
        })
        .state('subPart.edit', {
            url: "/edit/:id",
            templateUrl: "/test/app/subPart/edit.html",
            controller: "SubPartEditController as vm"
        })
        .state('subPart.show', {
            url: "/show/:id",
            templateUrl: "/test/app/subPart/show.html",
            controller: "SubPartShowController as vm"
        });
}
