'use strict';

/**
 * @ngdoc function
 * @name jamesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jamesApp
 */
angular.module('jamesApp')
        .controller('WorkCtrl', function($scope) {
            var cusid_ele = document.getElementsByClassName('siteNav');
            cusid_ele[0].style.display = 'block';
            var ul=cusid_ele[0];

            console.log(ul.children[0].children.length);
            // for(i-0;i<)
 		 var tag=document.getElementById('worktag');
  			tag.className="work-title";
 
        });
