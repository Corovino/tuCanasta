'use strict';
let mongoose = require('mongoose');
let Schema   = mongoose.Schema;


let ProductSchema = Schema({
    nombre:String,
    precio:Number,
    detalle:String,
    imagen:String,
    referencia_producto:{
        type:Schema.ObjectId,
        ref:'RefProductType'
    }
});

module.exports = mongoose.model('Product', ProductSchema);

