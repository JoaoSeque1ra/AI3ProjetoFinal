'use strict';

var utils = require('../utils/writer.js');
var Produto = require('../service/ProdutoService');

module.exports.deleteProduto = function deleteProduto(req, res) {
  const { produtoId } = res.locals.oas?.params;
  Produto.deleteProduto(produtoId)
    .then(function (response) {
      res.status(200).send("OLA");
    })
    .catch(function (response) {
      res.status(400).send("Adeus");
    });
};

module.exports.getListPrecoMedio = function getListPrecoMedio(req, res, next) {
  Produto.getListPrecoMedio()
    .then(function (response) {
      res.status(200).send("OLA");
    })
    .catch(function (response) {
      res.status(200).send("OLA");
    });
};

module.exports.getListProdutos = function getListProdutos(req, res, next) {
  Produto.getListProdutos()
    .then(function (response) {
      res.status(200).send("OLA");
    })
    .catch(function (response) {
      res.status(200).send("OLA");
    });
};

module.exports.getListProdutosNaoDesperdicados = function getListProdutosNaoDesperdicados(req, res, next) {
  Produto.getListProdutosNaoDesperdicados()
    .then(function (response) {
      res.status(200).send("OLA");
    })
    .catch(function (response) {
      res.status(200).send("OLA");
    });
};

module.exports.getListarAssociarProdutoUtilizador = function getListarAssociarProdutoUtilizador(req, res, next, utilizadorId) {
  Produto.getListarAssociarProdutoUtilizador(utilizadorId)
    .then(function (response) {
      res.status(200).send("OLA");
    })
    .catch(function (response) {
      res.status(200).send("OLA");
    });
};

module.exports.getProduto = function getProduto(req, res, next) {
  const { produtoId } = req.swagger.params
  Produto.getProduto(produtoId)
    .then(function (response) {
      res.status(200).send("OLA");
    })
    .catch(function (response) {
      res.status(200).send("OLA");
    });
};

module.exports.getProdutoByCategoria = function getProdutoByCategoria(req, res, next, categoria) {
  Produto.getProdutoByCategoria(categoria)
    .then(function (response) {
      res.status(200).send("OLA");
    })
    .catch(function (response) {
      res.status(200).send("OLA");
    });
};

module.exports.postAssociarProdutoCliente = function postAssociarProdutoCliente(req, res, next, body) {
  Produto.postAssociarProdutoCliente(body)
    .then(function (response) {
      res.status(200).send("OLA");
    })
    .catch(function (response) {
      res.status(200).send("OLA");
    });
};

module.exports.postProduto = function postProduto(req, res, next, body) {
  Produto.postProduto(body)
    .then(function (response) {
      res.status(200).send("OLA");
    })
    .catch(function (response) {
      res.status(200).send("OLA");
    });
};

module.exports.putProduto = function putProduto(req, res, next, body, produtoId) {
  Produto.putProduto(body, produtoId)
    .then(function (response) {
      res.status(200).send("OLA");
    })
    .catch(function (response) {
      res.status(200).send("OLA");
    });
};
