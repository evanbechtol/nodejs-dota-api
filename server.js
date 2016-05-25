var express = require('express');
var bodyParser = require('body-parser');
var Promise = require('Promise');
var _ = require('underscore');
var db = require('./db.js');
var dotaApi = require('./api.js');
var app = express();
var PORT = process.env.PORT || 3000;

// GET root index.html
app.get('/', function (req, res) {
    res.send('API Root');
});

app.use(bodyParser.json());

/*
 * GET entire match history 
 */
app.get('/match', function (req, res) {

    dotaApi.getMatchHistory().then(function (result) {
        if (result.hasOwnProperty('error')) {

            return res.status(400).json(res);

        } else if (result.length < 1) {

            var err = {
                error: 'No matches found'
            };

            return res.status(404).json(err);

        } else {
            return res.send(result);
        }

    }).catch(function (err) {
        console.error(err);
        return res.status(403).send(err);
    });
});

/*
 * GET a specific match details
 */
app.get('/match/:id', function (req, res) {
    var matchId = req.params.id;

    dotaApi.getMatchDetails(matchId).then(function (result) {
        if (result.hasOwnProperty('error')) {

            return res.status(400).json(res);

        } else if (result.length < 1) {

            var err = {
                error: 'No matches found'
            };

            return res.status(404).json(err);

        } else {
            return res.send(result);
        }
    }).catch(function (err) {
        console.error(err);
        return res.status(403).send(err);
    });
});

/*
 * GET player summaries
 */
app.get('/playerSummaries/:steamIds', function (req, res) {
    var steamIds = req.params.id;

    dotaApi.getPlayerSummaries(steamIds).then(function (result) {
        if (result.hasOwnProperty('error')) {

        } else if (result.length < 1) {

            var err = {
                error: 'No matches found'
            };

            return res.status(404).json(err);

        } else {
            return res.send(result);
        }
    }).catch(function (err) {
        console.error(err);
        return res.status(403).send(err);
    });
});


app.get('/getHeroes', function (req, res) {
    dotaApi.getHeroes().then(function (result) {
        if (result.hasOwnProperty('error')) {

        } else if (result.length < 1) {

            var err = {
                error: 'No matches found'
            };

            return res.status(404).json(err);
        } else {
            return res.send(result);
        }
    }).catch(function (err) {
        console.error(err);
        return res.status(403).send(err);
    });
});

app.get('/getGameItems', function (req, res) {
    dotaApi.getGameItems().then(function (result) {
        if (result.hasOwnProperty('error')) {

        } else if (result.length < 1) {

            var err = {
                error: 'No matches found'
            };

            return res.status(404).json(err);
        } else {
            return res.send(result);
        }
    }).catch(function (err) {
        console.error(err);
        return res.status(403).send(err);
    });
});

app.listen(PORT, function () {
    console.log('Express listening on port ' + PORT);
});