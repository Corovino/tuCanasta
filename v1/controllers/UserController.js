'use strict';

var bcrypt = require('bcrypt-nodejs'),
    fs     = require("fs"),
    path   = require('path'),
    User  = require('../models/user'),
    response = {},
    estatusCode  = 200,
    JWT   = require('../services/jwt');

let registerUser = (req, res) => {

    var user = new User(),
        params   = req.body;


    if(params.correo && params.password)
    {

           user.nombre = params.nombre;
           user.apellido = params.apellido;
           user.telefono = params.telefono;
           user.correo   = params.correo;
           user.foto     = null;
           user.pails    = params.pais;
           user.estado   = 'activo';
           user.rol      = '59ff9d7de9d8dadd453d3626';
           user.tipo_pago = null;
           user.direccion = null;



        User.findOne({ correo : user.correo.toLowerCase()}, (err, respUser) => {

            if(err)
            {
                res.status(500).send({message:err});
            }else{

                if (!respUser)
                {

                    bcrypt.hash(params.password, null, null, (err, hash) => {
                        user.password = hash;
                        user.save((err,userStored)=>{
                            if(err)
                            {
                                 res.send({message:"Problemas alguardar el usuario", error:err});
                            }else{

                                if(!userStored)
                                {
                                     res.status(404).send({message:"Problemas al guardar el usuario no found", error:userStored});
                                }else{
                                     console.log(userStored);
                                     res.status(200).send({message: userStored});
                                }
                            }
                        });
                    });

                }else{

                    res.status(500).send({message: "Elusuario ya esta registrado"});
                }

            }
        });

    }else{
            res.status(200).send({message:"datos incorrectos"});
    }

}

let loginUser = (req, res) => {

    let params = req.body;
    let email = params.correo;
    let password = params.password;

    User.findOne({correo: email.toLowerCase()}, (err, user) => {
        if (err) {
            res(500).send({message: 'Erro al consultal el usuario'});
        } else {

            if (user) {
                bcrypt.compare(password, user.password, (err, check) => {
                    if (check) {
                        res.status(200).send({token: JWT.createToken(user), user:user});
                    } else {
                        res.status(500).send({message: "credenciales incorrectas"});
                    }
                });
            } else {
                res.status(404).send({message: "User not Found"});
            }
        }
    });

}


module.exports ={
    registerUser,
    loginUser
}