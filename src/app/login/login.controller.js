(function() {
    'use strict';

    angular
        .module('eventngular.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(authService, $state, $log) {
        var vm = this;

        vm.user = {
            email: '',
            password: ''
        };

        vm.error = '';

        function authenticate() {
            authService.login(vm.user)
                .then(function(auth) {
                    console.log(auth);
                }, function(error) {
                    vm.error = error;
                });
        }

        function register() {
            authService.$createUser(vm.user).then(function() {
                vm.login();
            }, function(error) {
                vm.error = error;
            });
        }

        function githubAuth() {
            authService.externalLogin("github", function(error, authData) {
                if (error) {
                   vm.error = error;
                } else {
                    $log.log("Authenticated successfully with payload:", authData);
                }
            });
        }

        ///////////////////////////////////

        vm.authenticate = authenticate;
        vm.githubAuth = githubAuth;
        vm.register = register;
    }
})();
