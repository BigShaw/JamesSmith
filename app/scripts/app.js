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
        .config(function($routeProvider) {
            
            
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
        });
