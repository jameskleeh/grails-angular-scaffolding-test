//= wrapped

angular
    .module("test.app.subPart")
    .controller("SubPartEditController", SubPartEditController);

function SubPartEditController(SubPart, $stateParams, $state, Part) {
    var vm = this;

    vm.partList = Part.list();

    SubPart.get({id: $stateParams.id}, function(data) {
        vm.subPart = new SubPart(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve subPart with ID " + $stateParams.id}];
    });

    vm.updateSubPart = function() {
        vm.errors = undefined;
        vm.subPart.$update(function() {
            $state.go('subPart.show', {id: vm.subPart.id});
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
