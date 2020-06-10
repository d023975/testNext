var express = require('express');
var app = express();

let port = (process.env.PORT || '9000');
 

app.get('/user/:id', function (req, res, next) {
    console.log('before request handler');
    next();
});

app.get('/user/:id', function (req, res, next) {
    console.log('handling request');
    res.sendStatus(200);
     next('route');  // bypass remaining route callbacks
    }, function (req, res, next){
        console.log('next middleware');
        next();
    });

app.get('/user/:id', function (req, res, next) {
    console.log('after request handler');
    next();
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!')
});
