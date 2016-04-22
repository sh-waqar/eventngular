(function() {
  'use strict';

  angular
    .module('eventngular.events')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('eventList', {
        url: '/list',
        templateUrl: 'app/events/list/list.html',
        controller: 'ListController',
        controllerAs: 'vm'
      })
      .state('eventDetail', {
        url: '/detail',
        templateUrl: 'app/events/details/details.html',
        controller: 'DetailsController',
        controllerAs: 'vm'
      })
      .state('eventCreate', {
        url: '/create',
        templateUrl: 'app/events/create/create.html',
        controller: 'CreateController',
        controllerAs: 'vm'
      })
  }

})();
