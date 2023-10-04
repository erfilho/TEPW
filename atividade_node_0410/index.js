const express = require('express');
const app = express();

const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.engine('handlebars', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    }));

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/home', (req, res) => {
    res.render('home', {name: req.body.user})
})

app.get('/welcome', (req, res) => {
    res.send("Welcome Erineldo!");
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})