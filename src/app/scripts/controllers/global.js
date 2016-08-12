/**
 * Created by KNIGHTW on 2/18/14.
 */
'use strict';

angular.module('GolfApp')
    .controller('GlobalCtrl', function ($scope) {
/*
        if (!$scope.initialized)
        {
            //$scope.leagues = null;
            //$scope.selectedleague = null;
//            $scope.seasons = {};
//            $scope.selectedseason = null;
//            $scope.tournaments = {};
//            $scope.selectedtournament = {};
            //$scope.dbinfo = {};
            //$scope.golfers = null;
            //$scope.selectedgolfer = null;
            //$scope.countries = null;
            $scope.initialized = true;
        }
*/
/*
        $scope.changeView = function(view){
            // path not hash
            $location.path(view);
        };
*/

});

/*
angular.module('GolfApp')
    .factory('dataFactory', ['$http', function($http) {

        var urlBase = '/api/customers';
        var dataFactory = {};

        dataFactory.getCustomers = function () {
            return $http.get(urlBase);
        };

        dataFactory.getCustomer = function (id) {
            return $http.get(urlBase + '/' + id);
        };

        dataFactory.insertCustomer = function (cust) {
            return $http.post(urlBase, cust);
        };

        dataFactory.updateCustomer = function (cust) {
            return $http.put(urlBase + '/' + cust.ID, cust)
        };

        dataFactory.deleteCustomer = function (id) {
            return $http.delete(urlBase + '/' + id);
        };

        dataFactory.getOrders = function (id) {
            return $http.get(urlBase + '/' + id + '/orders');
        };

        return dataFactory;
    }]);*/
