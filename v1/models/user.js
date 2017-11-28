'use strict';

let mongoose = require('mongoose');
let Schema   = mongoose.Schema;


let UserSchema = Schema({
       nombre:String,
       apellido:String,
       telefono:String,
       correo:String,
       foto:String,
       pais:String,
       estado:Boolean,
       rol: {
           type: Schema.ObjectId,
           ref:'Role'
       },
       tipo_pago:{
           type:Schema.ObjectId,
           ref:'Ref_Payment_Method'
       },
       direccion:{
           type:Schema.ObjectId,
           ref:'Address'
       },
       password:String

});

module.exports = mongoose.model('User',UserSchema);