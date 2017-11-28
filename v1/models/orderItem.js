'use strict';

let mongoose =  require('mongoose'),
    Schema   = mongoose.Schema;



let OrderItemsSchema = Schema({
       orden_id:{
           type:Schema.ObjectId,
           ref:'User_order'
       },
       producto_id:{
           type:Schema.ObjectId,
           ref:'Product'
       }

});

module.export = mongoose.model('Order_item',OrderItemsSchema);
