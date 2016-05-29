var dotaApp = angular.module('dotaApi', ['ngRoute', 'ngResource', 'ngAnimate']);
dotaApp.factory('_', ['$window', function ($window) {
    return $window._;
}]);