/**
 * Created by KNIGHTW on 3/26/2014.
 */
'use strict';

angular.module('GolfApp')
    .controller('IndexCtrl', function ($scope, commonFactory) {
        $scope.common = commonFactory;
        $scope.view_title = $scope.common.getTitle();
    });