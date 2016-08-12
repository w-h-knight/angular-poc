'use strict';

angular.module('GolfApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
]);
/*
golf.run(['$templateCache',
    , function($templateCache) {
    $templateCache.put('views/header.html');
}]);
*/

angular.module('GolfApp').config(function ($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: 'views/golfmain.html',
            controller: 'GolfMainCtrl'
        })
        .when('/settings', {
                templateUrl: 'views/settings.html',
                controller: 'SettingsCtrl'
            })
        .when('/alltournaments', {
                templateUrl: 'views/alltournaments.html',
                controller: 'AllTournamentsCtrl'
            })
        .when('/golferinfo', {
                templateUrl: 'views/golferinfo.html',
                controller: 'GolferInfoCtrl'
            })
        .when('/golfentrants', {
                templateUrl: 'views/golfentrants.html',
                controller: 'GolfEntrantsCtrl'
            })
        .when('/addgolfer', {
                templateUrl: 'views/addgolfer.html',
                controller: 'AddGolferCtrl'
            })
        .when('/resolvegolferids', {
                templateUrl: 'views/resolvegolferids.html',
                controller: 'ResolveGolferIdsCtrl'
            })
        .when('/addgolflocation', {
                templateUrl: 'views/addgolflocation.html',
                controller: 'AddGolfLocationCtrl'
            })
        .when('/golfcourses', {
                templateUrl: 'views/golfcourses.html',
                controller: 'GolfCoursesCtrl'
            })
        .when('/golfhelp', {
                templateUrl: 'views/golfhelp.html',
                controller: 'GolfHelpCtrl'
            })
        .when('/golftournaments', {
                templateUrl: 'views/golftournaments.html',
                controller: 'GolfTournamentsCtrl'
            })
        .when('/golfteetimes', {
                templateUrl: 'views/golfteetimes.html',
                controller: 'GolfTeeTimesCtrl'
            })
        .when('/golfscores', {
                templateUrl: 'views/golfscores.html',
                controller: 'GolfScoresCtrl'
            })
        .otherwise({
                redirectTo: '/settings'
            });
});

