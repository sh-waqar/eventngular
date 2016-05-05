(function() {
    'use strict';

    angular
        .module('eventngular.login')
        .factory('authService', authService);

    /** @ngInject */
    function authService($firebaseAuth, FirebaseUrl) {
        var fireObj = new Firebase(FirebaseUrl);
        var authObj = $firebaseAuth(fireObj);

        return {
            login: login,
            logout: logout,
            signup: signup,
            externalLogin: externalLogin,
            checkAuth: checkAuth
        };

        //////////////////////////////////

        function login(creds) {
            return authObj.$authWithPassword(creds);
        }

        function logout() {

        }

        function signup(creds) {
            return authObj.$createUser(creds);
        }

        function externalLogin(type, func) {
            return fireObj.authWithOAuthPopup(type, func);
        }

        function checkAuth() {
            return authService.$requireAuth();
        }
    }
})();
