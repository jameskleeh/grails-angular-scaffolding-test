//= wrapped

angular
    .module("test.app.part")
    .controller("PartShowController", PartShowController);

function PartShowController(Part, $stateParams, $state) {
    var vm = this;

    Part.get({id: $stateParams.id}, function(data) {
        vm.part = new Part(data);
    }, function() {
        $state.go('part.list');
    });

    vm.delete = function() {
        vm.part.$delete(function() {
            $state.go('part.list');
        }, function() {
            //on error
        });
    };

}
