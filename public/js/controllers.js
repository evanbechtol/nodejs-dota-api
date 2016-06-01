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
    $scope.submit = function() {
        matchDetailsService.getMatch($scope.matchId).$promise.then(function (match) {
            $scope.match = _.pick(match, 'result');
            $scope.match = $scope.match.result;
            $scope.players = $scope.match.players;
            console.log('Num players: ' + $scope.players.length);
            for (var i = 0; i < $scope.players.length; i++) {
                console.log('Player: ' + $scope.players[i].account_id);
                getPlayerSummary($scope.players[i].account_id, i);
            }

        }, function (err) {
            console.error(err);
        });
    }
    
    function getPlayerSummary (id, num) {
        matchDetailsService.getPlayerSummaries($scope.convert32to64(id)).$promise.then(function (response) {

            var summary = _.pick(response, 'response');
            console.log(JSON.stringify(summary));
            summary = _.pick(summary.response, 'players');
            console.log('Num summaries: '  +summary.players.length);
            console.log('Personaname: ' + JSON.stringify(summary));
            $scope.players[num].personaname = summary.players.personaname;
            
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