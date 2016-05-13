//= wrapped
//= require /angular/angular
//= require /test/app/core/test.app.core
//= require /test/app/index/test.app.index
//= require /test/app/part/test.app.part

angular.module("test.app", [
    "test.app.core",
    "test.app.index",
    "test.app.part"
]);
