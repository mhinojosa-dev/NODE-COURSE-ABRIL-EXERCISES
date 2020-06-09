const {
    v4: uuidv4
} = require('uuid');
const {posts} = require('../db/database');


const getPost = () => {
    return posts;
}
const getPostID = postId => {
    return posts.find(post => post.id === postId);

}
const createPost = (userId, title, description, comments) => {
    let post = {
        id: uuidv4(),
        userId,
        title,
        description,
        comments,
    };
    posts.push(post);
    return post;
}
const updatePost = (id,userId, title, description, comments) => {
    let postIndex = posts.findIndex(post => post.id === id);
    if (postIndex < 0) {
        return null;
    }
    posts[postIndex].userId = userId;
    posts[postIndex].title = title;
    posts[postIndex].description = description;
    posts[postIndex].comments = comments;

    return posts[postIndex];
}
const deletePost = (id) => {
    let postIndex = posts.findIndex(post => post.id === id);

    if (postIndex < 0) {
        return null;
    }
    //splice borra dede el index del arreglo para cuantos campos al ser 1 borrar solo todo lo que esta en el index
    return posts.splice(postIndex, 1);
}
module.exports = {
    getPost,
    getPostID,
    createPost,
    updatePost,
    deletePost
}