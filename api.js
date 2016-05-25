var request = require('./request.js');


var dotaApi = {
    APIKEY: '25D91D3155115BD34D6B7F2C3E8D468F'
    , BASEURL: 'https://api.steampowered.com/IDOTA2Match_570'
    , getMatchHistory: function () {
        var params = '/GetMatchHistory/V001/?format=JSON&key=' + this.APIKEY;

        return new Promise(function (resolve, reject) {
            request({
                url: this.BASEURL + params
                , method: 'GET'
            }, function (error, response, body) {
                if (error) {
                    reject(error);
                } else {
                    resolve(body);
                }
            });
        });
    }
    , getMatchDetails: function (matchId) {
        var params = '/GetMatchDetails/V001/?match_id=' + matchId + '&key=' + this.APIKEY;

        return new Promise(function (resolve, reject) {
            request({
                url: this.BASEURL + params
                , method: 'GET'
            }, function (error, response, body) {
                if (error) {
                    reject(error);
                } else {
                    resolve(body);
                }
            });
        });
    }
    , getPlayerSummaries: function (steamIds) {
        var params = '/GetPlayerSummaries/v0002/?key=' + this.APIKEY + '&steamids=?' + steamIds;
        return request(params);
        //return promise(params);
    }
    , getGameItems: function () {
        var params = '/IEconDOTA2_570/GetGameItems/v0001/?key=' + this.APIKEY;

        return promise(params);
    }
    , getHeroes: function () {
        var params = '/IEconDOTA2_570/GetHeroes/v1/?key=' + this.APIKEY;

        return promise(params);
    }
    , convert32to64: function (short_id) {
        return short_id + 76561197960265728;
    }
    , convert64to32: function (long_id) {
        return long_id + 76561197960265728;
    }
};

function promise(params) {
    return new Promise(function (resolve, reject) {
        request({
            url: dotaApi.BASEURL + params
            , method: 'GET'
        }, function (error, response, body) {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
}

module.exports = dotaApi;