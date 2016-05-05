(function() {
    'use strict';

    angular
        .module('eventngular.login')
        .factory('authService', authService);

    /** @ngInject */
    function authService($firebaseAuth, FirebaseUrl) {
        var ref = new Firebase(FirebaseUrl);
        var auth = $firebaseAuth(ref);

        return auth;
    }
})();
