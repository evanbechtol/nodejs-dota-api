dotaApp.service('matchService', function() {
   this.matchId = '2377110923';
});

dotaApp.service('matchDetailsService', ['$resource', function($resource) {
    this.getMatch = function(matchId) {
        var dotaAPI = $resource("https://nodejs-dota-api.herokuapp.com/matchDetails/?");
    
        return dotaAPI.get({ match_id: matchId }); 
    }
}]);