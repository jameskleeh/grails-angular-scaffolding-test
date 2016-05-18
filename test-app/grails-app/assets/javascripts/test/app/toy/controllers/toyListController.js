//= wrapped

angular
    .module("test.app.toy")
    .controller("ToyListController", ToyListController);

function ToyListController(Toy) {
    var vm = this;

    var max = 10, offset = 0;

    Toy.list({max: max, offset: offset}, function(data) {
        vm.toys = data;
    });
}
