dotaApp.service('matchService', function() {
   this.matchId = '23771109232377110923';
});

dotaApp.service('matchDetailsService', ['$resource', function($resource) {
    this.getWeather = function(city, days) {
        var dotaAPI = $resource("http://localhost:3000", 
                        { callback: "JSON_CALLBACK" }, {get: {method: "JSONP" }});
    
       return dotaAPI.get({ match_id: '2377110923'}); 
    }
}]);