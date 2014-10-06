'use strict';

/**
 * @ngdoc overview
 * @name jamesApp
 * @description
 * # jamesApp
 *
 * Main module of the application.
 */
angular
        .module('jamesApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch'
        ])
        .config(["$routeProvider", function($routeProvider) {
            
            
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/home.html',
                        controller: 'HomeCtrl'
                    })
                    .when('/work', {
                        templateUrl: 'views/work.html',
                        controller: 'WorkCtrl'
                    })

                    .when('/work/year-book', {
                        templateUrl: 'views/work:year-book.html',
                        controller: 'WorkCtrl'
                    })

                    .when('/work/membrane', {
                        templateUrl: 'views/work:membrane.html',
                        controller: 'WorkCtrl'
                    })

                    .when('/work/still-and-moving', {
                        templateUrl: 'views/work:still-and-moving.html',
                        controller: 'WorkCtrl'
                    })

                    .when('/work/silent-nacht-games', {
                        templateUrl: 'views/work:silent-nacht-games.html',
                        controller: 'WorkCtrl'
                    })

                    .when('/work/trainspotting-revisited', {
                        templateUrl: 'views/work:trainspotting-revisited.html',
                        controller: 'WorkCtrl'
                    })

                    .when('/work/cage-cutters', {
                        templateUrl: 'views/work:cage-cutters.html',
                        controller: 'WorkCtrl'
                    })

                    .when('/work/a-graphic-society', {
                        templateUrl: 'views/work:a-graphic-society.html',
                        controller: 'WorkCtrl'
                    })

                    .when('/work/plastercine-portrait', {
                        templateUrl: 'views/work:plastercine-portrait.html',
                        controller: 'WorkCtrl'
                    })

                    .when('/work/scribbles', {
                        templateUrl: 'views/work:scribbles.html',
                        controller: 'WorkCtrl'
                    })


                    .when('/about', {
                        templateUrl: 'views/about.html',
                        controller: 'AboutCtrl'
                    })
                    .when('/contact', {
                        templateUrl: 'views/contact.html',
                        controller: 'ContactCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
        }]);

'use strict';

/**
 * @ngdoc function
 * @name jamesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jamesApp
 */
angular.module('jamesApp')
        .controller('HomeCtrl', ["$scope", function($scope) {

            var cusid_ele = document.getElementsByClassName('siteNav');
                  cusid_ele[0].style.display = 'none';
            //    console.log(cusid_ele);
        }]);

'use strict';

/**
 * @ngdoc function
 * @name jamesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jamesApp
 */
angular.module('jamesApp')
        .controller('WorkCtrl', ["$scope", function($scope) {
            var cusid_ele = document.getElementsByClassName('siteNav');
            cusid_ele[0].style.display = 'block';

        }]);

'use strict';

/**
 * @ngdoc function
 * @name jamesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jamesApp
 */
angular.module('jamesApp')
        .controller('AboutCtrl', ["$scope", function($scope) {
            var cusid_ele = document.getElementsByClassName('siteNav');
            cusid_ele[0].style.display = 'block';
        }]);

'use strict';

/**
 * @ngdoc function
 * @name jamesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jamesApp
 */
angular.module('jamesApp')
  .controller('ContactCtrl', ["$scope", function ($scope) {
            var cusid_ele = document.getElementsByClassName('siteNav');
            cusid_ele[0].style.display = 'block';
  }]);
