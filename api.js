var request = require('./request.js');
var querystring = require('querystring');

var dotaApi = {
    APIKEY: '25D91D3155115BD34D6B7F2C3E8D468F'
    , getMatchHistory: function (params) {
        var method = '/GetMatchHistory/v1/?key=' + this.APIKEY + querystring.stringify(params);
        return request(method);
    }
    
    , getMatchDetails: function (params) {
        var method = '/GetMatchDetails/v1/?key=' + this.APIKEY + querystring.stringify(params);
        return request(method);
    }
   
    , getPlayerSummaries: function (params) {
        var method = '/GetPlayerSummaries/v2/?key=' + this.APIKEY + querystring.stringify(params);
        return request(method);
    }
    
    , getGameItems: function (params) {
        var method = '/IEconDOTA2_570/GetGameItems/v1/?key=' + this.APIKEY + querystring.stringify(params);
        return request(method);
    }
    
    , getHeroes: function (params) {
        var method = '/IEconDOTA2_570/GetHeroes/v1/?key=' + this.APIKEY + querystring.stringify(params);
        return request(method);
    }
    
    , convert32to64: function (short_id) {
        return short_id + 76561197960265728;
    }
    
    , convert64to32: function (long_id) {
        return long_id + 76561197960265728;
    }
};

module.exports = dotaApi;