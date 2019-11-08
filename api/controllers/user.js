'user strict'

var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');

// Home
function home(req, res) {
    res.status(200).send({
        message: 'Bienvenido a R3NS - Home'
    });
}

// Test
function test(req, res) {
    res.status(200).send({
        message: 'Bienvenido a R3NS - Test'
    });
}

// Register User

function saveUser(req, res) {
    params = req.body;
    var user = new User();

    if(params.name && params.surname && params.nick && params.email && params.password) {
        user.name = params.name;
        user.surname = params.surname;
        user.nick = params.nick;
        user.email = params.email;
        user.role = 'ROLE_USER';
        user.image = null;

        // Control de usuarios duplicados
        User.find({ $or: [
            {email: user.email.toLowerCase()},
            {nick: user.nick.toLowerCase()}
        ]}).exec((err,users) => {
            if (err) return res.status(500).send({message: 'Error: no se ha podido guardar el  usuario'});
            if (users && users.length > 0) {
                return res.status(200).send({message: 'Error: email o nick duplicado'});
            } else {
                // Cifrado contraseña y guarda datos en bbdd
                bcrypt.hash(params.password, null, null, (err, hash) => {
                    user.password = hash;
                    user.save((err, userStored) => {
                        if (err) return res.status(500).send({message: 'Error: no se ha podido guardar el  usuario'});
                        if (userStored) { 
                            return res.status(200).send({user: userStored});
                        } else {
                            return res.status(404).send({message: 'Error al guardar usuario'})
                        }
                    })
                });  
            }
        });
    } else {
        res.status(200).send({
            message: 'Todos los campos de usuario son requeridos'
        });   
    }
}

module.exports = {
    home,
    test,
    saveUser
}