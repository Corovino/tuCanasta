'use stric';

let mongoose = require('mongoose'),
    Schema    = mongoose.Schema;

let RefOrderStatusCodeSchema = Schema({
      descripcion:String
});

module.exports = mongoose.model('Ref_Order_Status_Code', RefOrderStatusCodeSchema);




