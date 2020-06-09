const express = require('express');
const app = express();
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
  } = require("../models/user");
//GET
//mostrar  todos los usuarios
app.get('/users', (req, res) => {

    let users = getUsers();
    if (!users) {

        return res.status(400).json({
            ok: false,
            message: "A ocurrido un error inesperado",
        });
    }
    let total = users.length;
    res.json({
        ok: true,
        users,
        total
    });
});
//GET un usuario en base a su id : /users/1
app.get("/users/:userId", (req, res) => {
    let userId = req.params.userId;
    let user = getUser(userId);

    if (!user) {
        return res.status(400).json({
            ok: false,
            err: 'no se puede encontrar el usuario',
        });
    }
    res.json({
        ok: true,
        user
    });
});

// POST crear un usuario
app.post('/users', (req, res) => {
    let body = req.body;
    let userDB = createUser(body.name, body.email, body.password, body.role);

    if(!userDB) {
        return res.status(400).json({
            ok: false,
            err: "No es posible crear el usuario"
        });
    }
    res.json({
        ok: true,
        user: userDB
    });
});

//PUT actualizar un usuario
app.put('/users/:userId', (req, res) => {
    let userId = req.params.userId;
    let body = req.body;

    let userDB = updateUser(userId, body.name, body.email, body.password, body.role, body.state);
    if(!userDB) {
        return res.status(400).json({
            ok: false,
            err: "No es posible actualizar el usuario"
        });
    }
    res.json({
        ok: true,
        user: userDB
    });
});

// DELETE eliminar un usuario
app.delete('/users/:userId', (req, res) => {
    let userId = req.params.userId;
    let removed = deleteUser(userId);
    
    if(!removed) {
        return res.status(400).json({
            ok: false,
            err: "No es posible eliminar el usuario"
        });
    }
    res.json({
        ok: true,
        user: removed
    });
});

module.exports = app;
