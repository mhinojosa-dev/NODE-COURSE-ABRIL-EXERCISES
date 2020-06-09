//v4:uuidv4 renombra v4 a uuidv4
const {
    v4: uuidv4
} = require('uuid');
const {
    users
} = require('../db/database');

const getUsers = () => {
    return users;
}
const getUser = userId => {
    return users.find(user => user.id === userId);

}
const createUser = (name, email, password, role) => {
    let user = {
        id: uuidv4(),
        name,
        email,
        password,
        role,
        state: true
    };
    users.push(user);
    return user;
}
const updateUser = (id, name, email, password, role, state = true) => {
    let userIndex = users.findIndex(user => user.id === id);
    if (userIndex < 0) {
        return null;
    }
    users[userIndex].name = name;
    users[userIndex].email = email;
    users[userIndex].password = password;
    users[userIndex].role = role;
    users[userIndex].state = state;

    return users[userIndex];
}
const deleteUser = (id) => {
    let userIndex = users.findIndex(user => user.id === id);
    if (userIndex < 0) {
        return null;
    }
    //splice borra dede el index del arreglo para cuantos campos al ser 1 borrar solo todo lo que esta en el index
    return users.splice(userIndex, 1);
}
module.exports = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
}