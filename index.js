/* global __dirname */
var express = require('express');
var app = express();
var path = require('path');
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(8080);
console.log('Server Running at http://localhost:8080')
module.exports = app;