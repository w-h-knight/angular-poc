/**
 * Created by KNIGHTW on 2/11/14.
 */
'use strict';

angular.module('GolfApp')
    .controller('GolfMainCtrl', function ($scope, $window, commonFactory, miscFactory) {

        $scope.viewtitle = 'Golf Main';
        $scope.common = commonFactory;
        $scope.miscData = miscFactory;
        $scope.selectedleague = $scope.miscData.getSelectedLeague();
        $scope.selectedseason = $scope.miscData.getSelectedSeason();
        $scope.selectedtournament = $scope.miscData.getSelectedTournament();
        $scope.dbinfo = $scope.miscData.getDBInfo();
//        $scope.dbinfo.$promise.then(function () {
//            $scope.hello = 'done';
//        });

/*
        $scope.changeView = function(view){
            $location.path(view); // path not hash
        }
*/

        $scope.CloseBrowser = function() {
            $window.open('','_self','');
            $window.close();
        };
    });