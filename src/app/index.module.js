(function() {
  'use strict';

  angular
  	.module('3rdparty', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap']);

  angular
    .module('eventngular', ['3rdparty', 'eventngular.login']);

})();
