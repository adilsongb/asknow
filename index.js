const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Perguntas = require('./database/Perguntas');

connection
  .authenticate()
  .then(() => {
    console.log('Conexão feita com o banco de dados!');
  })
  .catch((erro) => {
    console.log(erro);
  });

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  Perguntas.findAll({ raw: true }).then((perguntas) => {
    res.render('index', { perguntas });
  });
});

app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  Perguntas.create({
    titulo,
    descricao
  }).then(() => {
    res.redirect('/');
  });
});

const PORT = process.env.PORT || 3306;

app.listen(PORT, () => {
  console.log('App rodando!');
});
