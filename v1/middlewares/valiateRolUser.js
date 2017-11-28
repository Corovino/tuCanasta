'use strict'

exports.isAdmin = (req, res, next) => {

    if(req.user.rol != '59ff9d7de9d8dadd453d3626')
    {
            res.status(200).send({message : 'You dont have  permmison to accesss'});
    }

    next();
}