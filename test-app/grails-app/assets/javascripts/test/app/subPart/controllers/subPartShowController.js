//= wrapped

angular
    .module("test.app.subPart")
    .controller("SubPartShowController", SubPartShowController);

function SubPartShowController(SubPart, $stateParams, $state) {
    var vm = this;

    SubPart.get({id: $stateParams.id}, function(data) {
        vm.subPart = new SubPart(data);
    }, function() {
        $state.go('subPart.list');
    });

    vm.delete = function() {
        vm.subPart.$delete(function() {
            $state.go('subPart.list');
        }, function() {
            //on error
        });
    };

}
