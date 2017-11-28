'use strict';

let express = require('express'),
    PrductController = require('../controllers/ProductController'),
    md_auth = require('../middlewares/authenticate'),
    mValidateRol = require('../middlewares/valiateRolUser'),
    multipart =  require('connect-multiparty'),
    md_upload = multipart({uploadDir :'./uploads/product'}),
    api     = express.Router();


api.post('/product',[md_auth.ensureAuth, md_upload, mValidateRol.isAdmin] , PrductController.postProduct);


module.exports = api;