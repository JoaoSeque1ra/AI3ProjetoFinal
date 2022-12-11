'use strict';

var utils = require('../utils/writer.js');
var Produto = require('../service/ProdutoService');

module.exports.deleteProduto = function deleteProduto (req, res, next, produtoId) {
  Produto.deleteProduto(produtoId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getListPrecoMedio = function getListPrecoMedio (req, res, next) {
  Produto.getListPrecoMedio()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getListProdutos = function getListProdutos (req, res, next) {
  Produto.getListProdutos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getListProdutosNaoDesperdicados = function getListProdutosNaoDesperdicados (req, res, next) {
  Produto.getListProdutosNaoDesperdicados()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getListarAssociarProdutoUtilizador = function getListarAssociarProdutoUtilizador (req, res, next, utilizadorId) {
  Produto.getListarAssociarProdutoUtilizador(utilizadorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProduto = function getProduto (req, res, next, produtoId) {
  Produto.getProduto(produtoId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProdutoByCategoria = function getProdutoByCategoria (req, res, next, categoria) {
  Produto.getProdutoByCategoria(categoria)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postAssociarProdutoCliente = function postAssociarProdutoCliente (req, res, next, body) {
  Produto.postAssociarProdutoCliente(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postProduto = function postProduto (req, res, next, body) {
  Produto.postProduto(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putProduto = function putProduto (req, res, next, body, produtoId) {
  Produto.putProduto(body, produtoId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
