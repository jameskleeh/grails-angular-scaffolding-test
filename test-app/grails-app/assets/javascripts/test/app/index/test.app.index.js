//= wrapped
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree templates
//= require /angular/ui-bootstrap-tpls
//= require /angular/angular-ui-router

    angular.module("test.app.index", [
        "test.app.core",
        "ui.bootstrap.dropdown",
        "ui.bootstrap.collapse",
        "ui.router"
    ])
    .config(config);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('index', {
            url: "/",
            templateUrl: "/test/app/index/index.html"
        });

    $urlRouterProvider.otherwise('/');
}
