'use strict';


/**
 * Eliminar utilizador
 * So consegue ser realizado por um utilizador logado
 *
 * email String email necessário
 * no response value expected for this operation
 **/
exports.deleteUtilizador = function(email) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Login do utilizador
 *
 * utilizador String nome do utilizador
 * password String palavra passe do utilizador
 * no response value expected for this operation
 **/
exports.getUtilizador = function(utilizador,password) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encontrar utilizador
 *
 * email String Necessário enviar o email do utilizador pretendido
 * returns Utilizador
 **/
exports.getUtilizadorByEmail = function(email) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tipo" : "utilizador",
  "password" : "password",
  "contacto" : "contacto",
  "apelido" : "apelido",
  "nome" : "nome",
  "email" : "user@exemple.com"
};
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
exports.logoutUtilizador = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updated utilizador
 * So consegue ser realizado por um utilizador logado
 *
 * body Utilizador 
 * email String email do utilizador necessário
 * no response value expected for this operation
 **/
exports.patchUtilizador = function(body,email) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Criar utilizador
 * Criação de um novo utilizador
 *
 * body Utilizador 
 * no response value expected for this operation
 **/
exports.postUtilizador = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

