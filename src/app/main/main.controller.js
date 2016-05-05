(function() {
    'use strict';

    angular
        .module('eventngular')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController() {
        var vm = this;

        vm.something = '';
    }
})();
