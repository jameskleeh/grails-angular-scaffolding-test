//= wrapped

angular
    .module("com.myblog.index")
    .controller("IndexController", IndexController);

function IndexController(applicationDataFactory, $state) {
    var vm = this;

    vm.contextPath = '/';

    applicationDataFactory.get().then(function(response) {
        vm.applicationData = response.data;
    });

    vm.stateExists = function(name) {
        return $state.get(name) != null;
    };

}
