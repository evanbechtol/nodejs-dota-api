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
       // console.log($scope.players[0].account_id);
        //$scope.player = getPlayerSummary($scope.players[0].account_id);
        console.log(getPlayerSummary($scope.players[0].account_id));
        console.log(JSON.stringify($scope.players));
    }, function (err) {
        console.error(err);
    });
    
    var getPlayerSummary  = function(id) {
        matchDetailsService.getPlayerSummaries($scope.convert32to64(id)).$promise.then(function (response) {
           // console.log('Summary: ' + JSON.stringify(response));
            var summary = _.pick(response, 'response');
            summary = _.pick(summary.response, 'players');
           // console.log(JSON.stringify(summary));
            if (_.has(summary, 'players')) {
               // console.log('We found player');
                
                var player = {personaname: summary.players[0].personaname, avatar: summary.players[0].avatar};
                console.log('Player: ' + JSON.stringify(player));
                return player;
            } else {
                console.error('Player not found');
                return {error: 'Player could not be found'};
            }
        }, function (err) {
            console.log('Error encountered');
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