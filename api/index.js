'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/r3sn', { useNewUrlParser: true,  useUnifiedTopology: true })
        .then(() => {
            console.log("Conexión a la base de datos R3SN establecida correctamente...");

            // Crear servidor
            app.listen(port, () => {
                console.log("Servidor corriendo en http://localhost:3800");
            });
        })
        .catch(err => console.log(err));