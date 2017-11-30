//Rutas de la api
var router = require('express').Router();

var config = require('../config'),
    AuthController = require('../controllers/authController');

var APIRoutes = function(passport) {
  router.post('/signup', AuthController.signUp);

  router.post('/authenticate', AuthController.authenticateUser);

  return router;
};

module.exports = APIRoutes;
