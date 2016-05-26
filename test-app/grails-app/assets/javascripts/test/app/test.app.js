//= wrapped
//= require /angular/angular
//= require /test/app/core/test.app.core
//= require /test/app/index/test.app.index
//= require /test/app/part/test.app.part
//= require /test/app/tag/test.app.tag
//= require /test/app/partType/test.app.partType
//= require /test/app/subPart/test.app.subPart

angular.module("test.app", [
    "test.app.core",
    "test.app.index",
    "test.app.part",
    "test.app.tag",
    "test.app.partType",
    "test.app.subPart"
]);
