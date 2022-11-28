'use strict';


/**
 * Criar utilizador
 * Criação de um novo utilizador
 *
 * body Utilizador 
 * no response value expected for this operation
 **/
exports.createUtilizador = function (body) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Eliminar utilizador
 * Só consegue ser realizado por um utilizador logado
 *
 * email String Email necessário
 * no response value expected for this operation
 **/
exports.deleteUtilizador = function (email) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Encontrar utilizador
 *
 * email String Necessário enviar o email do utilizador pretendido
 * returns Utilizador
 **/
exports.getUtilizadorByEmail = function (email) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "password": "password",
      "contacto": "contacto",
      "apelido": "apelido",
      "nome": "nome",
      "email": "email"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Login do utilizador
 *
 * utilizador String nome do utilizador
 * password String palavra passe do utilizador
 * returns String
 **/
exports.loginUtilizador = function (utilizador, password) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logout do utilizador
 *
 * no response value expected for this operation
 **/
exports.logoutUtilizador = function () {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Updated utilizador
 * So consegue ser realizado por um utilizador logado
 *
 * body Utilizador 
 * email String Email do utilizador necessário
 * no response value expected for this operation
 **/
exports.updateUtilizador = function (body, email) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}

