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
                var longId = $scope.convert32to64($scope.players[i].account_id);
                getPlayerSummary(longId, i);
            }

        }, function (err) {
            console.error(err);
        });
    }
    
    function getPlayerSummary (id, i) {
        matchDetailsService.getPlayerSummaries(id).$promise.then(function (response) {

            var summary = _.pick(response.response, 'players');
           // summary = _.pick(summary, 'players');
            //console.log('Num summaries: '  +summary.players.length);
            console.log('Personaname: ' + JSON.stringify(summary.players[0].personaname));
            $scope.players[i].personaname = summary.players[0].personaname;
            
        }, function (err) {
            console.log('Error encountered');
            return err;
        });
    }
    
    $scope.convert32to64 = function (short_id) {
        return short_id + 76561197960265728;
    };
    
    $scope.convert64to32 = function (long_id) {
        return long_id - 76561197960265728;
    };
    // $scope.matchResult = $scope.matchResult[1];

}]);