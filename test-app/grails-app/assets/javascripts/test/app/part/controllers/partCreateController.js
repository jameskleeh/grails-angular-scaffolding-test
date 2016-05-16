//= wrapped

angular
    .module("test.app.part")
    .controller("PartCreateController", PartCreateController);

function PartCreateController(Part, $state) {
    var vm = this;

    vm.part = new Part();

    vm.savePart = function() {
        vm.errors = [];
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
