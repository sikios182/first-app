//Creamos una nueva instacia de Sequelize para la comunicación con la base de datos

var config = require('./../config'),
    Sequelize = require('sequelize');

module.exports = new Sequelize(
  config.db.name,
  config.db.user,
  config.db.password,
  config.db.details
);
