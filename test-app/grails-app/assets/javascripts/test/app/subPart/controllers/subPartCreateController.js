//= wrapped

angular
    .module("test.app.subPart")
    .controller("SubPartCreateController", SubPartCreateController);

function SubPartCreateController(SubPart, $state, $stateParams, Part) {

    var vm = this;
    vm.partList = Part.list();
    vm.subPart = new SubPart();
    
    if ($stateParams.mainPartId) {
        vm.subPart.mainPart = {id: $stateParams.mainPartId};
    }
    
    vm.saveSubPart = function() {
        vm.errors = undefined;
        vm.subPart.$save({}, function() {
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
