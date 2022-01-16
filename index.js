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
  res.render('index');
});

app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  res.send(`Formulário recebido! Titulo: ${ titulo }`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('App rodando!');
});
