var request = require('request');
var Promise = require('es6-promise').Promise;
var APIKEY = '25D91D3155115BD34D6B7F2C3E8D468F';
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

    
, };