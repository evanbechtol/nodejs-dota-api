dotaApp.service('matchService', function() {
   this.matchId = '2377110923';
});

dotaApp.service('matchDetailsService', ['$resource', function($resource) {
    var BASEURL = 'https://nodejs-dota-api.herokuapp.com';
    this.getMatch = function(matchId) {
        var dotaAPI = $resource(BASEURL + "/matchDetails/?");
    
        return dotaAPI.get({ match_id: matchId }); 
    }
    this.getPlayerSummaries = function(steamId) {
        var dotaAPI = $resource(BASEURL + "/playerSummaries/?");
        
        return dotaAPI.get({steamids: steamId});
    }
}]);