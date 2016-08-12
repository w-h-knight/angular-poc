/**
 * Created by KNIGHTW on 3/28/2014.
 */
'use strict';

angular.module('GolfApp')
    .directive('golfHeader', function() {
    return {
        restrict: 'E',
        require: '^viewtitle',
        transclude: true,
        templateUrl: 'views/header.html'
    };
});