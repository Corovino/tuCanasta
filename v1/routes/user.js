'use strict';

let express  = require('express'),
    UserController = require('../controllers/UserController'),
    api = express.Router();


api.post('/login',UserController.loginUser);
api.post('/register',UserController.registerUser);

module.exports = api;

