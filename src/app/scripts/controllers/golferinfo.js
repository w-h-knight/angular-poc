/**
 * Created by KNIGHTW on 2/12/14.
 */
'use strict';

angular.module('GolfApp')
    .controller('GolferInfoCtrl', function ($scope, $rootScope, $http) {
        // function definitions
        {
            $scope.SetGolferInfo = function() {
                $http.get('http://localhost:2345/GolfData/Golfers/GetGolfersDetails?pGolferId=' + $scope.selectedgolfer.PlayerId + '&pSTOnly=4' ).
                    success(function (data) {
                        $scope.selectedgolferdetail = data[0];
                        if($scope.selectedgolferdetail){
                            angular.forEach($scope.$parent.countries, function(country, i)
                            {
                                if(country.CountryId==$scope.selectedgolferdetail.EthnicCountry)
                                {
                                    $scope.selectedcountry = $scope.$parent.countries[i];
                                    return;
                                }
                            });
                        }
                    }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                        alert("There was an error");
                });
            }

            $scope.GetGolfers = function () {
                if ($scope.golferselectedleague)
                {
                    $http.get('http://localhost:2345/GolfData/Golfers/GetGolfers?pLeagueId=' + $scope.golferselectedleague.LeagueId + '&pSTOnly=1' ).
                        success(function (data) {
                            $scope.$parent.golfers = data;
                            $scope.selectedgolfer = $scope.$parent.golfers[0];
                            $scope.SetGolferInfo();
                        }).
                        error(function(data, status, headers, config) {
                            // called asynchronously if an error occurs
                            // or server returns response with an error status.
                            alert('There was an error in GetGolfers');
                        });
                }
                else
                { $scope.$parent.golfers = null; }
            }
        }

        //view initialization code
        {
            $rootScope.view_title = 'Golfer Info';
            if ( $scope.$parent.countries === null )
            {
                $http.get('http://localhost:2345/GolfData/Misc/GetCountries?json=true').
                    success(function(result) {
                        $scope.$parent.countries = result;
                        $scope.golferselectedleague = $scope.$parent.selectedleague;
                        $scope.GetGolfers();
                    });
            }
            else
            {
            }

        }
    });