'use strict'

let JWT    = require('jwt-simple'),
    moment = require('moment'),
    pass   =  "clave_secreta";

exports.ensureAuth = ( req , res , next) => {

    if(! req.headers.authorization)
    {
        return  res.status(403).send({message:'You dont have correct permission'});
    }

    let token = req.headers.authorization.replace(/['"]+/g,'');

    try{

        var payload =  JWT.decode(token, pass);

        if(payload.exp <= moment().unix())
        {
            return res.status(401).send({message:'Token has expired'});
        }

    }catch (e){

        return res.status(404).send({message : 'Token not valid', token:token});
    }

    req.user = payload;
    next();
}

