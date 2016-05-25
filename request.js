var request = require('request');
var Promise = require('es6-promise').Promise;

module.exports = function (params) {
    var BASEURL: 'https://api.steampowered.com/IDOTA2Match_570';
    return new Promise(function (resolve, reject) {
        request({
            url: BASEURL + params
            , method: 'GET'
            , json: true
        }, function (error, response, body) {
            if (error) {
                reject(error);
            } else if (response.statusCode != 200) {
                var err = new Error('Received response code: ' + response.statusCode);
                reject(err);
            } else {
                resolve(body.result);
            }
        });
    });
};