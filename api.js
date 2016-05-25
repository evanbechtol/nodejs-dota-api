var request = require('request');
var Promise = require('es6-promise').Promise;
var APIKEY = '25D91D3155115BD34D6B7F2C3E8D468F';
var BASEURL = 'https://api.steampowered.com/IDOTA2Match_570';

var dotaApi = {
    getMatchHistory: function () {
        var params = '/GetMatchHistory/V001/?format=JSON&key=' + APIKEY;

        return new Promise(function (resolve, reject) {
            request({
                url: BASEURL + params
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
        var params = '/GetMatchDetails/V001/?match_id=' + matchId + '&key=' + APIKEY;

        return new Promise(function (resolve, reject) {
            request({
                url: BASEURL + params
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
        var params = '/GetPlayerSummaries/v0002/?key=' + APIKEY + '&steamids=?' + steamIds;

        return promise(params);
    }
    , getGameItems: function () {
        var params = '/IEconDOTA2_570/GetGameItems/v0001/?key=' + APIKEY;

        return promise(params);
    }
    , getHeroes: function () {
        var params = '/IEconDOTA2_570/GetHeroes/v1/?key=' + APIKEY;

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
            url: BASEURL + params
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