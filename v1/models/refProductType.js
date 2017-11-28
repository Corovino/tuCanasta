'use strict';

let mongoose = require('mongoose');
let Schema   = mongoose.Schema;


let RefProductTypeSchema = Schema({
    nombre:String,
    descripcion:String
});

module.exports = mongoose.model('Ref_Product_Type', RefProductTypeSchema);