//= wrapped
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree templates
//= require /angular/ui-bootstrap-tpls

    angular.module("test.app.index", [
        "test.app.core",
        "ui.bootstrap.dropdown",
        "ui.bootstrap.collapse"
    ])
    .config(config);

function config(\$stateProvider) {
    \$stateProvider
        .state('index', {
            url: "/",
            templateUrl: "test/app/index/index.html"
        });
}
