'use strict';

const sequelize = require("../config/database")

const ProdutoTable = require("../model/Produto")

var utils = require('../utils/writer.js');
const Produto = require('../service/ProdutoService');

sequelize.sync({
  // force:true
})

module.exports.addProduto = function addProduto(req, res, next, body) {
  Produto.addProduto(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.associarProdutoCliente = function associarProdutoCliente(req, res, next, body) {
  Produto.associarProdutoCliente(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProduto = function deleteProduto(req, res, next, produtoId) {
  Produto.deleteProduto(produtoId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findByCategoria = function findByCategoria(req, res, next, categoria) {
  Produto.findByCategoria(categoria)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getListPrecoMedio = function getListPrecoMedio(req, res, next) {
  Produto.getListPrecoMedio()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getListProdutos = function getListProdutos(req, res, next) {
  ProdutoTable.findAll()
    .then((response) => {
      console.log(!!response)
      if(!!response)
        return res.json({status: 404})
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getListProdutosNaoDesperdicados = function getListProdutosNaoDesperdicados(req, res, next) {
  Produto.getListProdutosNaoDesperdicados()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProdutoById = function getProdutoById(req, res, next, produtoId) {
  Produto.getProdutoById(produtoId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listarAssociarProdutoUtilizador = function listarAssociarProdutoUtilizador(req, res, next, utilizadorId) {
  Produto.listarAssociarProdutoUtilizador(utilizadorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProduto = function updateProduto(req, res, next, body, produtoId) {
  Produto.updateProduto(body, produtoId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
