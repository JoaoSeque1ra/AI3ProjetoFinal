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
    const { utilizadorId } = req.swagger.params
    Produto.getListarAssociarProdutoUtilizador(utilizadorId)
    .then(function (response) {
      res.status(200).send("Enviada a lista com sucesso");
    })
    .catch(function (response) {
      res.status(404).send("Utilizador não encontrado");
    });
};

module.exports.getProduto = function getProduto(req, res) {
  const { produtoId } = req.swagger.params
  Produto.getProduto(produtoId)
    .then(function (response) {
      res.status(200).send("Lista de Produtos enviados");
    })
    .catch(function (response) {
      res.status(400).send("Erro ao enviar lista");
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
      if(!response)
        return res.status(200).send("Produto adicionado com sucesso");
      res.status(400).send("Request body do produto invalido");
    })
    .catch(function (response) {
      res.status(401).send("Sem autorização");
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
