(function() {
    'use strict';

    angular
        .module('eventngular.events')
        .controller('DetailsController', DetailsController);

    /** @ngInject */
    function DetailsController() {
        var vm = this;

        vm.justToAddSomething = '';
    }
})();
