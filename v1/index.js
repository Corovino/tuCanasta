'use strict';

let mongoose = require('mongoose'),
    app      = require('./app');

let port     = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/tuCanasta', {useMongoClient : true})
        .then( () => {
            console.log('conect success');
            app.listen( port, () => {
                console.log(`server runing in  port ${port}`);

            } )
        })
        .catch( err => console.log(err));