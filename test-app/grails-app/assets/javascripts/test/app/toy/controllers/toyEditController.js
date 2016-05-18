//= wrapped

angular
    .module("test.app.toy")
    .controller("ToyEditController", ToyEditController);

function ToyEditController(Toy, $stateParams, $state, timeZoneService) {
    var vm = this;

    vm.timeZoneList = timeZoneService.get();

    Toy.get({id: $stateParams.id}, function(data) {
        vm.toy = new Toy(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve toy with ID " + $stateParams.id}];
    });

    vm.updateToy = function() {
        vm.errors = undefined;
        vm.toy.$update(function() {
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
