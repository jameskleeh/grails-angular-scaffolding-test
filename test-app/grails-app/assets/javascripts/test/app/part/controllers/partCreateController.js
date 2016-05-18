//= wrapped

angular
    .module("test.app.part")
    .controller("PartCreateController", PartCreateController);

function PartCreateController(Part, $state, PartType) {

    var vm = this;
    vm.partTypeList = PartType.list();
    vm.part = new Part();

    vm.savePart = function() {
        vm.errors = undefined;
        vm.part.$save({}, function() {
            $state.go('part.list');
        }, function(response) {
            var data = response.data;
            if (data.hasOwnProperty('message')) {
                vm.errors = [data];
            } else {
                vm.errors = data._embedded.errors;
            }
        });
    };
}
