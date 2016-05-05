(function() {
    'use strict';

    angular
        .module('eventngular.events')
        .controller('CreateController', CreateController);

    /** @ngInject */
    function CreateController() {
        var vm = this;

        var today = new Date().toLocaleDateString();
        vm.today = today;
        // Variables for start date
        vm.startDateOpen = false;
        vm.startDate = today; // Initialize with the current date

        vm.startDateOptions = {
            showWeeks: false
        };



        function openStartDate() {
            vm.startDateOpen = true;
        }

        // Available functions
        vm.openStartDate = openStartDate;
    }
})();
