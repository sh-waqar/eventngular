(function() {
    'use strict';

    angular
        .module('eventngular.events')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider) {
        $stateProvider
            .state('eventList', {
                url: '/list',
                templateUrl: 'app/events/list/list.html',
                controller: 'ListController',
                controllerAs: 'vm',
                resolve: {
                  auth: function($state, authService) {
                      return authService.checkAuth.catch(function() {
                          $state.go('login');
                      });
                  },
                  profile: function(authService) {
                      return authService.checkAuth.then(function() {
                          return 'Users.getProfile(auth.uid).$loaded()';
                      });
                  }
                }
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
