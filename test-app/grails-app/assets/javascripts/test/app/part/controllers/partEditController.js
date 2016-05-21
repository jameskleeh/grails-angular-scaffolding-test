//= wrapped

angular
    .module("test.app.part")
    .controller("PartEditController", PartEditController);

function PartEditController(Part, $stateParams, $state, Tag, PartType, SubPart) {
    var vm = this;

    vm.tagList = Tag.list();
    vm.partTypeList = PartType.list();
    vm.subPartList = SubPart.list();

    Part.get({id: $stateParams.id}, function(data) {
        vm.part = new Part(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve part with ID " + $stateParams.id}];
    });

    vm.updatePart = function() {
        vm.errors = undefined;
        vm.part.$update(function() {
            $state.go('part.show', {id: vm.part.id});
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
