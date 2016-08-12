/**
 * Created by KNIGHTW on 2/27/14.
 */
'use strict';

angular.module('GolfApp')
    .controller('GolfCoursesCtrl', function ($scope, $rootScope, $http, $location, $window) {


        //view initialization code
        {
            $scope.common = commonFactory;

            $rootScope.view_title = 'Course Setup';
        }

    });