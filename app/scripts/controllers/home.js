'use strict';

/**
 * @ngdoc function
 * @name jamesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jamesApp
 */
angular.module('jamesApp')
        .controller('HomeCtrl', function($scope) {


            var cusid_ele = document.getElementsByClassName('siteNav');
                  cusid_ele[0].style.display = 'none';
        

            //    console.log(cusid_ele);
        });
