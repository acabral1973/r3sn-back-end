'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Cargar rutas



// Midelwares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Cors



// Rutas

// Home
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Bienvenido a R3NS - Home'
    });
});

// Test
app.post('/test', (req, res) => {
    res.status(200).send({
        message: 'Bienvenido a R3NS - Test'
    });
});

// Export
module.exports = app;
