'use strict';

let mongoose = require('mongoose');
let Schema   = mongoose.Schema;


let RoleSchema = Schema({
    nombre:String,
    descripcion:String

});

module.exports = mongoose.model('Role',RoleSchema);