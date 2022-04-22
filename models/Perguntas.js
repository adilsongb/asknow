const Sequelize = require('sequelize');
const connection = require('./connection');

// Cria a tabela "perguntas" no banco de dados
const Perguntas = connection.define('perguntas', {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

// Sincroniza (cria) a tabela perguntas no banco de dados, caso a tabela não exista.
Perguntas.sync({ force: false })
  .then(() => {});

module.exports = Perguntas;
