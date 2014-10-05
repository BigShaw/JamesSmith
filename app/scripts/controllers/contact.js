'use strict';

/**
 * @ngdoc function
 * @name jamesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jamesApp
 */
angular.module('jamesApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
