var express = require('express');
var _ = require('underscore');
var querystring = require('querystring');
//var db = require('./db.js');
var dotaApi = require('./server/lib/dotaApi.js');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000;

dotaApi.APIKEY = '25D91D3155115BD34D6B7F2C3E8D468F';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
});

app.get('/match', function (req, res) {
    var options = _.isNull(req.query) ? req.query : null;

    dotaApi.getMatchHistory(options).then(function (result) {
        return validateResults(result, res);
    }, function (error) {
        console.error(error);
        return res.status(503).send(error);
    });
});

app.get('/matchDetails', function (req, res) {
    var options = req.query;

    dotaApi.getMatchDetails(options).then(function (result) {
        return validateResults(result, res);
    }, function (error) {
        console.error(error);
        return res.status().send(error);
    });
});

app.get('/playerSummaries', function (req, res) {
    var options = req.query;

    dotaApi.getPlayerSummaries(options).then(function (result) {
        return validateResults(result, res);
    }, function (error) {
        console.error(error);
        return res.status(503).send(error);
    });
});


app.get('/getHeroes', function (req, res) {
    dotaApi.getHeroes().then(function (result) {
        return validateResults(result, res);
    }, function (error) {
        console.error(error);
        return res.status(503).send(error);
    });
});

app.get('/getGameItems', function (req, res) {
    dotaApi.getGameItems().then(function (result) {
        return validateResults(result, res);
    }, function (error) {
        console.error(error);
        return res.status(503).send(error);
    });
});

app.get('/getRarities', function (req, res) {
    dotaApi.getRarities().then(function (result) {
        return validateResults(result, res);
    }, function (error) {
        console.error(error);
        return res.status(503).send(error);
    });
});


app.get('/getSchemaUrl', function (req, res) {
    dotaApi.getSchemaUrl().then(function (result) {
        return validateResults(result, res);
    }, function (error) {
        console.error(error);
        return res.status(503).send(error);
    });
});

function validateResults(result, res) {
    if (result.hasOwnProperty('error')) {
        return res.status(403).json(res);
    } else if (_.isNull(result)) {
        var err = {
            error: 'No results found'
        };
        return res.status().send(err);
    } else {
        return res.send(result);
    }
}

app.listen(PORT, function () {
    console.log('Express listening on port ' + PORT);
});