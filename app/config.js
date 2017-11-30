//Configuracion de la aplicación

var config = module.exports;

config.db = {
  user: 'root',
  password: '1234',
  name: 'api'
};

config.db.details = {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql'
};

config.keys = {
  secret: '/jVdfUX+u/Kn3qPY4+ahjwQgyV5UhkM5cdh1i2xhozE='
};
