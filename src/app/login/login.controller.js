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

        function authenticate() {
            authService.$authWithPassword(vm.user).then(function(auth) {
                $log.log(auth);
                // Redirect to main events dashboard
                $state.go('eventList');
            }, function(error) {
                $log.log(vm.user);

                vm.error = error;
                $log.log(error);
            });
        }

        function register() {
            authService.$createUser(vm.user).then(function() {
                vm.login();
            }, function(error) {
                vm.error = error;
            });
        }

        // var ref = new Firebase("https://eventngular.firebaseio.com/");
        // $log.log(ref);
        function githubAuth() {
            var ref = new Firebase("https://eventngular.firebaseio.com/");
            ref.authWithOAuthPopup("google", function(error, authData) {
                if (error) {
                    $log.log("Login Failed!", error);
                } else {
                    $log.log("Authenticated successfully with payload:", authData);
                }
            });
        }


        vm.authenticate = authenticate;
        vm.githubAuth = githubAuth;
        vm.register = register;
    }
})();
