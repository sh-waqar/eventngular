/* global moment:false */
(function() {
  'use strict';

  angular
    .module('eventngular')
    .constant('moment', moment)
    .constant('FirebaseUrl', 'https://eventngular.firebaseio.com/');

})();
