'use strict';

/**
 * @ngdoc function
 * @name jamesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jamesApp
 */
angular.module('jamesApp')
        .controller('AboutCtrl', function($scope) {
            var cusid_ele = document.getElementsByClassName('siteNav');
            cusid_ele[0].style.display = 'block';
        });
