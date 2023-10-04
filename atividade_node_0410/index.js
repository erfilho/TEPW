const express = require('express');
const app = express();

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/welcome', (req, res) => {
    res.send("Welcome Erineldo!");
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})