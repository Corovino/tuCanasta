'use strict';


let mongoose = require('mongoose');
let Schema   = mongoose.Schema;


let UserOrderSchema = Schema({
      usuario_id:{
          type:Schema.ObjectId,
          ref:'User'
      },
      codigo_orden:{
          type:Schema.ObjectId,
          ref:'RefOrderStatusCode'
      },
      fecha_orden:{ type: Date, default: Date.now },
      detalle:String

});

module.exports = mongoose.model('Ref_Order_Status_Code',UserOrderSchema);