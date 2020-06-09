const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(require('./routes'));
//pasar una ruta
/*app.get('/', (req, res) => {
    // res.send('Hello World');
    res.json({
        message: 'Hello World'
    });
});
app.get('/estudiante', (req, res) => {
    // res.send('Hello World');
    res.json({
        nombre: 'Mauricio',
        age: 28,
        valid : true
    });
});*/
app.listen(PORT, () => {
    console.log(`listen on ${PORT}`);
});