(function() {
  'use strict';

  angular
    .module('eventngular.login')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/login/signup.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('signup.step-one', {
        url: '/signup-step-one',
        template: '<div>adsada</div>',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('signup.step-two', {
        url: '/signup/step-two',
        templateUrl: '<div>adsada</div>',
        controller: 'MainController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
