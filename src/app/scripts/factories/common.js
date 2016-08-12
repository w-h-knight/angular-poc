/**
 * Created by KNIGHTW on 3/18/2014.
 */
'use strict';

/* Common Factory */
angular.module('GolfApp')
    .factory('commonFactory', function($location) {
        var viewTitle;

        return {
            setTitle: function (title) {
                viewTitle = title;
            },
            getTitle: function() {
                return viewTitle;
            },
            doSomething: function () {
                //Do something here
            },
            doSomethingElse: function () {
                //Do something else here
            },
            changeView: function ( view) {
                $location.path(view); // path not hash
            }
        };
    });
