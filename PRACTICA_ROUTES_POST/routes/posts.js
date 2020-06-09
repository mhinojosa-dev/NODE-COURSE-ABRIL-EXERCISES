const express = require('express');
const app = express();
const {
    getPost,
    getPostID,
    createPost,
    updatePost,
    deletePost,
  } = require("../models/post");
//GET
//mostrar  todos los usuarios
app.get('/posts', (req, res) => {

    let posts = getPost();
    if (!posts) {

        return res.status(400).json({
            ok: false,
            message: "A ocurrido un error inesperado",
        });
    }
    let total = posts.length;
    res.json({
        ok: true,
        posts,
        total
    });
});
//GET un usuario en base a su id : /users/1
app.get("/posts/:postID", (req, res) => {
    let postId = req.params.postID;
    let post = getPostID(postId);

    if (!post) {
        return res.status(400).json({
            ok: false,
            err: 'no se puede encontrar el post',
        });
    }
    res.json({
        ok: true,
        post
    });
});

// POST crear un post
app.post('/posts', (req, res) => {
    let body = req.body;
    let postDB = createPost(body.userId, body.title, body.description, body.comments);

    if(!postDB) {
        return res.status(400).json({
            ok: false,
            err: "No es posible crear el usuario"
        });
    }
    res.json({
        ok: true,
        post: postDB
    });
});

//PUT actualizar un usuario
app.put('/posts/:postId', (req, res) => {
    let postId = req.params.postId;
    let body = req.body;

    let postDB = updatePost(postId,body.userId, body.title, body.description, body.comments);
    if(!postDB) {
        return res.status(400).json({
            ok: false,
            err: "No es posible actualizar el usuario"
        });
    }
    res.json({
        ok: true,
        post: postDB
    });
});

// DELETE eliminar un usuario
app.delete('/posts/:postId', (req, res) => {
    let postId = req.params.postId;

    let removed = deletePost(postId);
    
    if(!removed) {
        return res.status(400).json({
            ok: false,
            err: "No es posible eliminar el usuario"
        });
    }
    res.json({
        ok: true,
        post: removed
    });
});

module.exports = app;
