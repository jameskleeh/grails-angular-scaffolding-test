//= wrapped
//= require /angular/angular
//= require /test/app/core/test.app.core
//= require /test/app/index/test.app.index
//= require /test/app/part/test.app.part
//= require /test/app/partType/test.app.partType

angular.module("test.app", [
    "test.app.core",
    "test.app.index",
    "test.app.part",
    "test.app.partType"
]);
