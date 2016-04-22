(function() {
    'use strict';

    angular
        .module('eventngular.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($firebaseArray) {
        var vm = this;

        var ref = new Firebase("https://eventngular.firebaseio.com/");
        console.log(ref);
        ref.authWithOAuthPopup("github", function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }
        });
    }
})();
