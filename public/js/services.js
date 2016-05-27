dotaApp.service('matchService', function() {
   this.matchId = '2377110923';
});

dotaApp.service('matchDetailsService', ['$resource', function($resource) {
    this.getMatch = function(matchId) {
        var dotaAPI = $resource("http://localhost:3000/matchDetails/", 
                        { callback: "JSON_CALLBACK" }, {get: {method: "JSONP" }});
    
       return dotaAPI.get({ match_id: matchId}); 
    }
}]);