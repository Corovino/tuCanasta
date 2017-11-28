'use strict';

let mongoose = require('mongoose');
let Schema   = mongoose.Schema;


let CitySchema = Schema({
     nombre:String,
     estado:Boolean
})

module.exports = mongoose.model('City', CitySchema);