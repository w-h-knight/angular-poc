/**
 * Created by KNIGHTW on 3/19/2014.
 */
'use strict';

/* Common Factory */
angular.module('GolfApp')
    .factory('miscFactory', function($resource, $window) {
        var selectedleague;
        var selectedseason;
        var selectedtournament;
        var leagues;
        var seasons;
        var tournaments;
        var dbinfo;
        var tournplayers;
        return {
            setSelectedLeague: function (league) {
                selectedleague = league;
            },
            getSelectedLeague: function () {
                return selectedleague;
            },
            getLeagues: function () {
                if (!leagues) {
                    leagues = $resource('http://localhost:2345/GolfData/Misc/GetLeagues?json=true').query();
                    leagues.$promise.then(function (response) {
                        return response.data;
                    }, function (error) {
                        $window.alert('ERROR ' + error);
                    });
                }
                return leagues;
            },
            setSelectedSeason: function (season) {
                selectedseason = season;
            },
            getSelectedSeason: function () {
                return selectedseason;
            },
            resetSeasons: function () {
                seasons = null;
            },
            getSeasons: function () {
                if (!seasons) {
                    seasons = $resource('http://localhost:2345/GolfData/Misc/GetSeasons?pLeagueId=' + selectedleague.LeagueId).query();
                    seasons.$promise.then(function (response) {
                        return response.data;
                    });
                }
                return seasons;
            },
            setSelectedTournament: function (tournament) {
                selectedtournament = tournament;
            },
            getSelectedTournament: function () {
                return selectedtournament;
            },
            resetTournaments : function () {
                tournaments = null;
            },
            getTournaments: function () {
                if (!tournaments) {
                //if (true) {
                    tournaments = $resource('http://localhost:2345/GolfData/Tournaments/GetTournaments?pSeasonId=' + selectedseason.SeasonId + '&pTournID=null&pTournName=null').query();
                    tournaments.$promise.then(function (response) {
                        return response.data;
                    });
                }
                return tournaments;
            },
            getTournamentPlayers: function () {
                if(selectedtournament)
                {
                    if (!tournplayers) {
                        tournplayers = $resource('http://localhost:2345/GolfData/Tournaments/GetTournamentPlayers?pTournID=' + selectedtournament.TournId + '&pPlayerID').query();
                        tournplayers.$promise.then(function (response) {
                            return response.data;
                        });
                    }
                }
                return tournplayers;
            },
            getDBInfo: function() {
                if (!dbinfo) {
                    dbinfo = $resource('http://localhost:2345/GolfData/Misc/GetDBInfo?json=true').get();
                    dbinfo.$promise.then(function (response) {
                        return response.data;
                    });
                }
                return dbinfo;
            }
        };
    });