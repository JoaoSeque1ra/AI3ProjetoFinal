'use strict';

var utils = require('../utils/writer.js');
var Produto = require('../service/ProdutoService');

module.exports.deleteProduto = function deleteProduto(req, res) {
  const { produtoId } = res.locals.oas?.params;

  Produto.deleteProduto(produtoId)
    .then(function (response) {
      res.status(200).send("Produto eliminado");
    })
    .catch(function (response) {
      if(!!response)
        return res.status(40).send("o produto não existe");

      res.status(400).send("o produto não foi eliminado")
    });
};

module.exports.getListPrecoMedio = function getListPrecoMedio(req, res, next) {
  Produto.getListPrecoMedio()
    .then(function (response) {
      if(!response)
        return res.status(200).send("Lista de preço medio enviado ");
      return res.status(404).send("Não existe");
    })
    .catch(function (response) {
      res.status(200).send("Erro");
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

module.exports.getListProdutosNaoDesperdicados = function getListProdutosNaoDesperdicados(req, res) {
  Produto.getListProdutosNaoDesperdicados()
    .then(function (response) {
      if(!response)
        return res.status(200).send("Lista de produtos não desperdicados enviada");
      
      return res.status(404).send("Não existe produtos na base de dados");
    })
    .catch(function (response) {
      res.status(400).send("Erro ao enviar a lista");
    });
};

module.exports.getListarAssociarProdutoUtilizador = function getListarAssociarProdutoUtilizador(req, res) {
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
      if(!response)
        return res.status(404).send("Produto não encontrado");

      res.status(200).send("Produto enviado com sucesso");
    })
    .catch(function (response) {
      res.status(400).send("Erro no envio da informação do produto");
    });
};

module.exports.getProdutoByCategoria = function getProdutoByCategoria(req, res) {
  const { categoria } = req.swagger.params

  Produto.getProdutoByCategoria(categoria)
    .then(function (response) {
      if(!response)
        return res.status(404).send("Lista de produtos enviado consoante a categoria");

      res.status(200).send("Lista de produtos enviado consoante a categoria");
    })
    .catch(function (response) {
      res.status(400).send("Invalido");
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
      res.status(200).send("Produto adicionado com sucesso");
    })
    .catch(function (response) {
      res.status(400).send("Request body do produto invalido");
    });
};

module.exports.putProduto = function putProduto(req, res) {
  const { produtoId } = req.swagger.params
  const body = req.swagger.params

  Produto.putProduto(body, produtoId)
    .then(function (response) {
      res.status(200).send("Produto atualizado com sucesso");
    })
    .catch(function (response) {
      if(!!response)
        return res.status(404).send("Produto não encontrado")
      res.status(400).send("Erro na atualização do produto");
    });
};
