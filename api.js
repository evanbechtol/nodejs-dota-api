var request = require('request');
var Promise = require('es6-promise').Promise;
var APIKEY = '';
var BASEURL = 'https://api.steampowered.com/IDOTA2Match_570';

module.exports = {
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
};
