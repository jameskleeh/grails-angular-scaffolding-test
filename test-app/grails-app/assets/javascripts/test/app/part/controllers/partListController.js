//= wrapped

angular
    .module("test.app.part")
    .controller("PartListController", PartListController);

function PartListController(Part) {
    var vm = this;

    var max = 10, offset = 0;

    Part.list({max: max, offset: offset}, function(data) {
        vm.partList = data;
    });
}
