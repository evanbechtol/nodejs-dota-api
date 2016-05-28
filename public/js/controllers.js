dotaApp.controller('homeController', ['$scope', '$resource', '$location', 'matchService', function($scope, $resource, $location, matchService) {
    $scope.city = matchService.city;
    
    $scope.$watch('city', function() {
        matchService.city = $scope.city;
    });
    
    $scope.submit = function() {
        $location.path('/forecast');
    };
}]);

dotaApp.controller('matchController', ['$scope', '$routeParams', 'matchDetailsService', 'matchService', function($scope, $routeParams, matchDetailsService, matchService) {
    $scope.matchId = matchService.matchId;
    $scope.days = $routeParams.days || '2';
    $scope.matchResult = ' ';
    $scope.matchResult = matchDetailsService.getMatch($scope.matchId);
    
}]);