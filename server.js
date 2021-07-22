try {
    require('@dynatrace/oneagent')();
  } catch (e) {
    console.warn(`OneAgent: ${ e.message }`);
  }

var express = require('express');
var app = express();

const Sdk = require('@dynatrace/oneagent-sdk');

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
    getApi().traceIncomingRemoteCall({
        serviceName: 'sap-papm-test-dynatrace',
        serviceMethod: 'after request handler',
        serviceEndpoint: `${req.hostname} `
    });
    console.log('after request handler');
    next();
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});

function getApi() {
    if (!this._Api){ 
        this._Api = Sdk.createInstance();
        console.log('Got Api')
    }
    return this._Api;
}


