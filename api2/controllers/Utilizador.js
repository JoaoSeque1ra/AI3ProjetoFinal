'use strict';

var utils = require('../utils/writer.js');
var Utilizador = require('../service/UtilizadorService');

module.exports.deleteUtilizador = function deleteUtilizador(req, res, next, email) {
  Utilizador.deleteUtilizador(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUtilizador = function getUtilizador(req, res, next, utilizador, password) {
  Utilizador.getUtilizador(utilizador, password)
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

module.exports.logoutUtilizador = function logoutUtilizador(req, res, next) {
  Utilizador.logoutUtilizador()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchUtilizador = function patchUtilizador(req, res, next, body, email) {
  Utilizador.patchUtilizador(body, email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postUtilizador = function postUtilizador(req, res, next, body) {
  Utilizador.postUtilizador(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
