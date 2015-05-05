'use strict';

angular
    .module('materialSeed', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMaterial'
    ])
    .config(function($routeProvider,$mdThemingProvider) {
      //Change intentions color
      $mdThemingProvider.theme('default').primaryPalette('blue-grey');
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .controller('AppCtrl', function($scope, $timeout, $mdSidenav, $mdUtil, $log) {
        console.log("hey");
        $scope.toggleRight = buildToggler('right');
        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildToggler(navID) {
            var debounceFn = $mdUtil.debounce(function() {
                $mdSidenav(navID)
                    .toggle()
                    .then(function() {
                        $log.debug("toggle " + navID + " is done");
                    });
            }, 300);
            return debounceFn;
        }
    })
    .controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
        console.log('left');
        $scope.close = function() {
            $mdSidenav('left').close()
                .then(function() {
                    $log.debug("close LEFT is done");
                });
        };
    })
    .controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
        console.log('right');
        $scope.close = function() {
            $mdSidenav('right').close()
                .then(function() {
                    $log.debug("close RIGHT is done");
                });
        };
    });