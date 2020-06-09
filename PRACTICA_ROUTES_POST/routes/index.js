const express = require('express');

const app = express();

// routes
app.use(require('./users'));
app.use(require('./posts'));

module.exports = app;