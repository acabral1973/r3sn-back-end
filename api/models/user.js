'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema =Schema({
    name: String,
    surname: String,
    nick: String,
    email: String,
    role: String,
    image: String,
    password: String
});

module.exports = mongoose.model('User', UserSchema);