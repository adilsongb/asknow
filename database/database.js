const Sequelize = require('sequelize');

const connection = new Sequelize('asknow', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = connection;
