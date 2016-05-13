//= wrapped

angular
    .module("test.app.part")
    .controller("PartEditController", PartEditController);

function PartEditController(Part, $stateParams, $state) {
    var vm = this;

    Part.get({id: $stateParams.id}, function(data) {
        vm.part = new Part(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve part with ID " + $stateParams.id}];
    });

    vm.updatePart = function() {
        vm.errors = [];
        vm.part.$update(function() {
            $state.go('part.list');
        }, function(response) {
            vm.errors = response.data;
        });
    };
}
