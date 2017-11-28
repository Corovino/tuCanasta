'use strict';


var Product = require('../models/product');

let postProduct = (req, res) => {

    let product = new Product(),
        params = req.body;

    product.nombre = params.nombre;
    product.precio = params.precio;
    product.detalle = params.detalle;
    product.imagen = params.imagen;
    product.referencia_producto = null;


    product.save( (err, productStore) => {

        if(err)
        {
            res.status(500).send({message:err});
        }else{
            if(!productStore)
            {
                res.status(500).send({message:'nose puede guardar el producto'});
            }else{
                 res.status(200).send({message:productStore});
            }
        }

    });

}

module.exports = {
   postProduct
}