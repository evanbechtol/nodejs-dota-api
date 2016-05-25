var request = require('request');
var Promise = require('es6-promise').Promise;

var req = function (params) {
    return new Promise(function (resolve, reject) {
        request({
            url: dotaApi.BASEURL + params
            , method: 'GET'
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
}

module.exports = req;