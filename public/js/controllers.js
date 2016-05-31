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
        console.log($scope.players[0]);
        $scope.player = getPlayerSummary($scope.players[0].account_id);
        console.log($scope.player);
        console.log($scope.player);
        console.log(JSON.stringify($scope.players));
    }, function (err) {
        console.error(err);
    });
    
    var getPlayerSummary  = function(id) {
        matchDetailsService.getPlayerSummaries($scope.convert32to64(id)).$promise.then(function (summary) {
            
            if (_.has(summary.response, 'players')) {
                var player = {personaname: summary.personaname, avatar: summary.avatar};
                return player;
            } else {
                return {error: 'Player could not be found'};
            }
        }, function (err) {
            return err;
        });
    }
    
    $scope.convert32to64 = function (short_id) {
        return short_id + 76561197960265728;
    };
    
    $scope.convert64to32 = function (long_id) {
        return long_id + 76561197960265728;
    };
    // $scope.matchResult = $scope.matchResult[1];

}]);