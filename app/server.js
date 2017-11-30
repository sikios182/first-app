//Incluimos las dependencias npm que usará la aplicación
var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    sequelize = require('sequelize'),
    passport = require('passport'),
    jwt = require('jsonwebtoken'),
    hookJWTStrategy = require('./services/passportStrategy.js');

//Inicializamos la aplicación
var app = express();

//Parse como urlencoded y json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Inicializamos morgan logger como dev
app.use(morgan('dev'));

//Inicializamos el middleware de autenticación passport
app.use(passport.initialize());

//Anclamos el passport JWT Strategy
hookJWTStrategy(passport);

//Bundle API routes
app.use('/api', require('./routes/api')(passport));

//Ruta de Home
app.get('/', (req, res, next) => {
  res.send('Funciona!');
});

//Server Express
app.use(express.static('public'));

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Listening on port ${PORT}');
});
