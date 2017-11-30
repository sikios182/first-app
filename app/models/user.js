//Modelo de usuario

var Sequelize = require('sequelize'),
    bcrypt = require('bcrypt');

var config = require('../config'),
    db = require('../services/database');

//Modelo user
var modelDefinition = {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
};

//Opciones del modelo
var modelOptions = {
  instanceMethods: {
    comparePasswords: comparePasswords
  },
  hooks: {
    beforeValidate: hashPassword
  }
};

//Definimos el model del usuario
var UserModel = db.define('user', modelDefinition, modelOptions);

//Comparar las dos contraseñas
function comparePasswords(password, callback) {
  bcrypt.compare(password, this.password, function(error, isMatch) {
    if (error) {
      return callback(error);
    }

    return callback(null, isMatch);
  });
}

function hashPassword(user) {
  //Password hashing logic
  if (user.changed('password')) {
    return bcrypt.hash(user.password, 10).then(function(password) {
      user.password = password;
    })
  }
}

//Exportamos el modulo
module.exports = UserModel;
