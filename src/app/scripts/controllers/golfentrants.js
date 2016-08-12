/**
 * Created by KNIGHTW on 2/14/14.
 */
'use strict';

angular.module('GolfApp')
    .controller('GolfEntrantsCtrl', function ($scope, commonFactory, miscFactory) {

        $scope.viewtitle = 'Tournament Entry Lists';
        $scope.loading = true;
        $scope.playercount = 'Count: 0';
        $scope.common = commonFactory;
        $scope.miscData = miscFactory;
        $scope.tournaments = $scope.miscData.getTournaments();
        $scope.tournaments.$promise.then(function () {
            $scope.selectedtournament = $scope.miscData.getSelectedTournament();   //$scope.tournaments[22];
            //$scope.miscData.setSelectedTournament($scope.selectedtournament);
            $scope.tournplayers = $scope.miscData.getTournamentPlayers();
            $scope.tournplayers.$promise.then(function () {
                $scope.selectedplayer = $scope.tournplayers[0];
                $scope.playercount = 'Count: ' + $scope.tournplayers.length;
                $scope.loading = false;
            });
        });
    });