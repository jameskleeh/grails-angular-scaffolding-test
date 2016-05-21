//= wrapped

angular
    .module("test.app.part")
    .controller("PartCreateController", PartCreateController);

function PartCreateController(Part, $state, Tag, PartType, SubPart) {

    var vm = this;
    vm.tagList = Tag.list();
    vm.partTypeList = PartType.list();
    vm.subPartList = SubPart.list();
    vm.part = new Part();
    
    vm.savePart = function() {
        vm.errors = undefined;
        vm.part.$save({}, function() {
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
