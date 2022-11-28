'use strict';

var utils = require('../utils/writer.js');
var Utilizador = require('../service/UtilizadorService');

module.exports.createUtilizador = function createUtilizador(req, res, next, body) {
  Utilizador.createUtilizador(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUtilizador = function deleteUtilizador(req, res, next, email) {
  Utilizador.deleteUtilizador(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUtilizadorByEmail = function getUtilizadorByEmail(req, res, next, email) {
  Utilizador.getUtilizadorByEmail(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginUtilizador = function loginUtilizador(req, res, next, utilizador, password) {
  Utilizador.loginUtilizador(utilizador, password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.logoutUtilizador = function logoutUtilizador(req, res, next) {
  Utilizador.logoutUtilizador()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUtilizador = function updateUtilizador(req, res, next, body, email) {
  Utilizador.updateUtilizador(body, email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
