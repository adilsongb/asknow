const Sequelize = require('sequelize');

const connection = new Sequelize('heroku_0a0ce0b1dcc7cb8', 'b055bb187a2d1f', 'a21d93d2', {
  host: 'us-cdbr-east-05.cleardb.net',
  dialect: 'mysql',
  logging: false
});

module.exports = connection;
