//= wrapped

angular
    .module("test.app.subPart")
    .controller("SubPartListController", SubPartListController);

function SubPartListController(SubPart) {
    var vm = this;

    var max = 10, offset = 0;

    SubPart.list({max: max, offset: offset}, function(data) {
        vm.subPartList = data;
    });
}
