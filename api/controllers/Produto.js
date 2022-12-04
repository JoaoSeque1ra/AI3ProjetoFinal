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
        return res.status(404).send("Produto não existe");

      res.status(400).send("Input inválido")
    });
};

module.exports.getListPrecoMedio = function getListPrecoMedio(req, res) {
  Produto.getListPrecoMedio()
    .then(function (response) {
      if(!response)
        return res.status(200).send("Lista de preço medio enviado ");

      return res.status(404).send("Não existem produtos na base dados");
    })
    .catch(function (response) {
      res.status(400).send("Erro ao enviar a lista");
    });
};

module.exports.getListProdutos = function getListProdutos(req, res) {
  Produto.getListProdutos()
    .then(function (response) {
      if(!response)
        return res.status(404).send("Não existem produtos na base de dados")
      res.status(200).send("Lista de produtos enviados");
    })
    .catch(function (response) {
      res.status(400).send("Erro ao enviar a lista");
    });
};

module.exports.getListProdutosNaoDesperdicados = function getListProdutosNaoDesperdicados(req, res) {
  Produto.getListProdutosNaoDesperdicados()
    .then(function (response) {
      if(!response)
        return res.status(404).send("Não existe produtos na base de dados");
      
      return res.status(200).send("Lista de produtos não desperdicados enviada");
    })
    .catch(function (response) {
      res.status(400).send("Erro ao enviar a lista");
    });
};

module.exports.getListarAssociarProdutoUtilizador = function getListarAssociarProdutoUtilizador(req, res) {
    const { utilizadorId } = req.swagger.params

    Produto.getListarAssociarProdutoUtilizador(utilizadorId)
    .then(function (response) {
      if(!response)
        return res.status(404).send("Utilizador não foi encontrado")
      res.status(200).send("Enviada a lista com sucesso");
    })
    .catch(function (response) {
      res.status(400).send("Input inválido");
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

module.exports.postAssociarProdutoCliente = function postAssociarProdutoCliente(req, res) {
  const body = req.swagger.body
  
  Produto.postAssociarProdutoCliente(body)
    .then(function (response) {
      res.status(200).send("Associação feita com sucesso");
    })
    .catch(function (response) {
      res.status(400).send("Input inválido");
    });
};

module.exports.postProduto = function postProduto(req, res) {
  const body = req.swagger.body
  
  Produto.postProduto(body)
    .then(function (response) {
      return res.status(200).send("Produto adicionado com sucesso");
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
