dotaApp.controller('homeController', ['$scope', '$resource', '$location', 'matchService', function ($scope, $resource, $location, matchService) {
    $scope.city = matchService.city;

    $scope.$watch('city', function () {
        matchService.city = $scope.city;
    });

    $scope.submit = function () {
        $location.path('/forecast');
    };
}]);

dotaApp.controller('matchController', ['$scope', '$routeParams', 'matchDetailsService', 'matchService', function ($scope, $routeParams, matchDetailsService, matchService) {
    $scope.matchId = matchService.matchId;
    matchDetailsService.getMatch($scope.matchId).$promise.then(function (match) {
        $scope.match = _.pick(match, 'result');
        $scope.match = $scope.match.result;
        $scope.players = $scope.match.players;
        console.log(JSON.stringify($scope.players));
    }, function (err) {
        console.error(err);
    });
    
    $scope.convert32to64 = function (id) {
    	return dotaApi.convert32to64(id);   
    };
    $scope.convert64to32 = function(id) {
        return dotaApi.convert64to32(id);
    };
    $scope.getPlayerName = function(id) {
        
    }
    // $scope.matchResult = $scope.matchResult[1];

}]);