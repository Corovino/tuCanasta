'use strict';

let mongoose = require('mongoose');
let Schema   = mongoose.Schema;


let RefPaymentMethodSchema = Schema({
    nombre:String,
    descripcion:String

});

module.exports = mongoose.model('Ref_Payment_Method',RefPaymentMethodSchema);