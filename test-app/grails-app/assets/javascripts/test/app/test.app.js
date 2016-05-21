//= wrapped
//= require /angular/angular
//= require /test/app/core/test.app.core
//= require /test/app/index/test.app.index
//= require /test/app/partType/test.app.partType
//= require /test/app/tag/test.app.tag
//= require /test/app/subPart/test.app.subPart
//= require /test/app/part/test.app.part

angular.module("test.app", [
    "test.app.core",
    "test.app.index",
    "test.app.partType",
    "test.app.tag",
    "test.app.subPart",
    "test.app.part"
]);
