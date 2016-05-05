(function() {
    'use strict';

    angular
        .module('3rdparty', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'firebase']);

    angular
        .module('eventngular', ['3rdparty', 'eventngular.login', 'eventngular.events']);

})();
