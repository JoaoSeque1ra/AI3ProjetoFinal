'use strict';


/**
 * Eliminar utilizador
 * So consegue ser realizado por um utilizador logado
 *
 * email String email necessário
 * no response value expected for this operation
 **/
exports.deleteUtilizador = function (email) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Login do utilizador
 *
 * utilizador String nome do utilizador
 * password String palavra passe do utilizador
 * returns Utilizador
 **/
exports.getUtilizador = function (utilizador, password) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "password": "1234",
      "contacto": "contacto",
      "apelido": "910933857",
      "nome": "Hugo",
      "email": "hugo@exemple.com"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      reject();
    }
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
      "password": "1234",
      "contacto": "contacto",
      "apelido": "910933857",
      "nome": "Hugo",
      "email": "hugo@exemple.com"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      reject();
    }
  });
}


/**
 * Logout do utilizador
 *
 * email String Necessário enviar o email do utilizador pretendido
 * no response value expected for this operation
 **/
exports.logoutUtilizador = function (email) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Updated utilizador do tipo de utilizador
 * Atualizar um tipo de utilizador
 *
 * body UtilizadorChangeTipo 
 * email String email do utilizador necessário
 * returns UtilizadorChangeTipo
 **/
exports.patchUtilizador = function (body, email) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "tipo": "utilizador"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      reject();
    }
  });
}


/**
 * Criar utilizador
 * Criação de um novo utilizador
 *
 * body Utilizador 
 * no response value expected for this operation
 **/
exports.postUtilizador = function (body) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Atualiza um utilizador
 * Atualiza um utilizador, com base no requestBody
 *
 * body Utilizador 
 * email String email do utilizador necessário
 * returns Utilizador
 **/
exports.putUtilizador = function (body, email) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "password": "45311645",
      "contacto": "908492940",
      "apelido": "Bernardo",
      "nome": "Hugo",
      "email": "hugo@gamil.com"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      reject();
    }
  });
}