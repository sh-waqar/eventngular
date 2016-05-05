(function() {
    'use strict';

    angular
        .module('eventngular.events')
        .controller('ListController', ListController);

    /** @ngInject */
    function ListController($uibModal) {
        var vm = this;

        vm.eventList = [{
            name: 'Event 1',
            location: 'Dubai, UAE',
            datetime: '10 Jan 2016',
            attendies: 22
        }, {
            name: 'Event 1',
            location: 'Dubai, UAE',
            datetime: '10 Jan 2016',
            attendies: 22
        }, {
            name: 'Event 1',
            location: 'Dubai, UAE',
            datetime: '10 Jan 2016',
            attendies: 22
        }, {
            name: 'Event 1',
            location: 'Dubai, UAE',
            datetime: '10 Jan 2016',
            attendies: 22
        }, {
            name: 'Event 1',
            location: 'Dubai, UAE',
            datetime: '10 Jan 2016',
            attendies: 22
        }];

        vm.createEvent = function() {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/events/create/create.html',
                controller: 'CreateController',
                controllerAs: 'vm',
                bindToController: true,
                size: 'large'
            });
        };
    }
})();
