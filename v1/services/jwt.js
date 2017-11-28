'use strict'

let jwt = require('jwt-simple');
let moment = require('moment');
let secret = 'clave_secreta';

exports.createToken = (user) =>{
    let payload ={
        nombre:String,
        apellido:String,
        telefono:String,
        correo:String,
        foto:String,
        pais:String,
        estado:Boolean,
        rol: user.rol,
        tipo_pago: user.tipo_pago,
        direccion: user.direccion,
        iat: moment().unix(),
        exp: moment().add(30,'days').unix()
    };

    return jwt.encode(payload,secret);
};