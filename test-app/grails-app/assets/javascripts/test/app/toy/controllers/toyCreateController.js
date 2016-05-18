//= wrapped

angular
    .module("test.app.toy")
    .controller("ToyCreateController", ToyCreateController);

function ToyCreateController(Toy, $state, timeZoneService) {

    var vm = this;

    vm.timeZoneList = timeZoneService.get();

    vm.toy = new Toy();

    vm.saveToy = function() {
        vm.errors = undefined;
        vm.toy.$save({}, function() {
            $state.go('toy.list');
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
