/**
 * Created by KNIGHTW on 1/31/14.
 */
'use strict';

angular.module('GolfApp')
    .controller('SettingsCtrl', function ($scope, commonFactory, miscFactory) {
        $scope.viewtitle = 'Golf Settings';
        $scope.loading = true;
        $scope.common = commonFactory;
        $scope.common.setTitle('Golf Settings');
        $scope.data = {};

        $scope.miscData = miscFactory;
        $scope.leagues = $scope.miscData.getLeagues();
        $scope.leagues.$promise.then(function () {
            $scope.data.selectedleague = $scope.leagues[5];
            $scope.miscData.setSelectedLeague($scope.data.selectedleague);
            $scope.seasons =  $scope.miscData.getSeasons();
            $scope.seasons.$promise.then(function () {
                $scope.data.selectedseason = $scope.seasons[0];
                $scope.miscData.setSelectedSeason($scope.data.selectedseason);
                $scope.tournaments = $scope.miscData.getTournaments();
                $scope.tournaments.$promise.then(function () {
                    $scope.data.selectedtournament = $scope.tournaments[22];
                    $scope.miscData.setSelectedTournament($scope.data.selectedtournament);
                    $scope.loading = false;
                });
            });
        });

        $scope.GetSeasons = function () {
            if ($scope.data.selectedleague)
            {
                $scope.loading = true;
                $scope.miscData.setSelectedLeague($scope.data.selectedleague);
                $scope.miscData.resetSeasons();
                $scope.seasons =  $scope.miscData.getSeasons();
                $scope.seasons.$promise.then(function () {
                    $scope.data.selectedseason = $scope.seasons[0];
                    $scope.miscData.setSelectedSeason($scope.data.selectedseason);
                    $scope.GetTournaments();
                    $scope.loading = false;
                });
            }
            else
            { $scope.data.seasons = null; }
        };

        $scope.GetTournaments = function () {
            if ($scope.data.selectedseason)
            {
                $scope.loading = true;
                $scope.miscData.setSelectedSeason($scope.data.selectedseason);
                $scope.miscData.resetTournaments();
                $scope.tournaments = $scope.miscData.getTournaments();
                $scope.tournaments.$promise.then(function () {
                    $scope.data.selectedtournament = $scope.tournaments[22];
                    $scope.miscData.setSelectedTournament($scope.data.selectedtournament);
                    $scope.loading = false;
                });
            }
            else
            { $scope.data.tournaments = null; }
        };

        $scope.SetTournament = function() {
            $scope.miscData.setSelectedTournament($scope.data.selectedtournament);
        };
    });