'use strict'

var express = require('express');
var UserController = require('../controllers/user');
var api = express.Router();

// Rutas para los métodos del controlador

api.get('/home', UserController.home);
api.get('/test', UserController.test);
api.post('/register', UserController.saveUser);

module.exports = api;