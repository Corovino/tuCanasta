'use strict';

let express = require('express');
let bodyParse = require('body-parser');

var app = express();

//load routes
var user_routes = require('./routes/user');
var product_routes = require('./routes/product');

//middlewares

app.use(bodyParse.urlencoded({extended :false}));
app.use(bodyParse.json());


//Headers and cors

app.use((req, res, next)=>{
    res.header('Acces-Cntrol-Allow-Origin','*');
    res.header('Acces-Cntrol-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-Whit, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Method','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    next();
});

//base routes
app.use('/v1', user_routes);
app.use('/v1', product_routes);


module.exports = app;