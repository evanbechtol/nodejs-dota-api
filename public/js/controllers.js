dotaApp.controller('homeController', ['$scope', '$resource', '$location', 'matchService', function($scope, $resource, $location, matchService) {
    $scope.city = matchService.city;
    
    $scope.$watch('city', function() {
        matchService.city = $scope.city;
    });
    
    $scope.submit = function() {
        $location.path('/forecast');
    };
}]);

dotaApp.controller('forecastController', ['$scope', '$routeParams', 'matchDetailsService', 'matchService', function($scope, $routeParams, matchDetailsService, matchService) {
    $scope.matchId = matchService.matchId;
    $scope.days = $routeParams.days || '2';
    $scope.weatherResult = matchDetailsService.getMatch($scope.matchId);
    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    }
    
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }
}]);