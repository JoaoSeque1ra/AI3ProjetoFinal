'use strict';

var utils = require('../utils/writer.js');
var Utilizador = require('../service/UtilizadorService');

module.exports.deleteUtilizador = function deleteUtilizador(req, res) {
  const { email } = req.swagger.params

  Utilizador.deleteUtilizador(email)
    .then(function (response) {
      res.status(200).send("Utilizador eliminado com sucesso")
    })
    .catch(function (response) {
      if(!!response)
        return res.status(400).send("Utilizador não foi eliminado")
      
      res.status(400).send("Utilizador não foi eliminado")
    });
};

module.exports.getUtilizador = function getUtilizador(req, res) {
  const { utilizador, password } = req.swagger.params

  Utilizador.getUtilizador(utilizador, password)
    .then(function (response) {
      if(!response)
        return res.status(404).send("utilizador não existe");
        
      res.status(200).send("Utilizador logado com sucesso");
    })
    .catch(function (response) {
      res.status(400).send("Utilizador invalido")
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

module.exports.logoutUtilizador = function logoutUtilizador(req, res) {
  Utilizador.logoutUtilizador()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchUtilizador = function patchUtilizador(req, res, next, body) {
  
  const { email } = res.locals.oas?.params;
  Utilizador.patchUtilizador(body, email)
    .then(function (response) {
      res.status(200).send("Atualizado utilizador com sucesso");
    })
    .catch(function (response) {
      res.status(404).send("Utilizador não foi encontrado");
    });
};

module.exports.postUtilizador = function postUtilizador(req, res) {
  const body = req.swagger.body

  Utilizador.postUtilizador(body)
    .then(function (response) {
      res.status(200).send("Utilizador criado com sucesso")
    })
    .catch(function (response) {
      res.status(400).send("Erro na criacao de um utilizador")
    });
};
