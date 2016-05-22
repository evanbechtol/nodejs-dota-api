var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/exampledb';

// Use mongoose to connect to the db
var db = mongoose.connect(url);
module.exports = db;