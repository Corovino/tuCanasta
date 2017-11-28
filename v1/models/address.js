'use strict';

let mongoose = require('mongoose');
let Schema   = mongoose.Schema;


let AddressSchema = Schema({
    direaccion:String,
    ciudad:{
        type:Schema.objectId,
        ref:'City'
    },
    codigo_postal:String,
    barrio:String,
    tipo_residencia:String,
    detalle:String

});

module.exports = mongoose.model('Address',AddressSchema);