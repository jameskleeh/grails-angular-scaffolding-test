//= wrapped

angular
    .module("test.app.toy")
    .controller("ToyShowController", ToyShowController);

function ToyShowController(Toy, $stateParams, $state) {
    var vm = this;

    Toy.get({id: $stateParams.id}, function(data) {
        vm.toy = new Toy(data);
    }, function() {
        $state.go('toy.list');
    });

    vm.delete = function() {
        vm.toy.$delete(function() {
            $state.go('toy.list');
        }, function() {
            //on error
        })
    };

}
