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

        for (var i = 0; i < $scope.players.length; i++) {
           getPlayerSummary($scope.players[i].account_id);
        }

        //console.log('Call: ' + $scope.getPlayerSummary($scope.players[0].account_id));
        //console.log(JSON.stringify($scope.players));
    }, function (err) {
        console.error(err);
    });
    
    function getPlayerSummary (id) {
        var player;
        matchDetailsService.getPlayerSummaries($scope.convert32to64(id)).$promise.then(function (response) {

            var summary = _.pick(response, 'response');
            summary = _.pick(summary.response, 'players');
            console.log(JSON.stringify(summary));
            for (var i = 0; i < summary.players.length; i++) {
                    $scope.players[i].personaname = summary.players[i].personaname;
                    //console.log('Player: ' + JSON.stringify($scope.player));
                    //return player;
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