var express = require('express');
var app = express();

app.get('/user/:id', function (req, res, next) {
    console.log('before request handler');
    next();
});

app.get('/user/:id', function (req, res, next) {
    console.log('handling request');
    res.sendStatus(200);
    next();
});

app.get('/user/:id', function (req, res, next) {
    console.log('after request handler');
    next();
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
