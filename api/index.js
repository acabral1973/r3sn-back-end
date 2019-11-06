'use strict'

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/r3sn', { useMongoClient: true})
        .then(() => {
            console.log("Conexión a la base de datos R3SN establecida correctamente...");
        })
        .catch(err => console.log(err));