'use strict';


/**
 * Adicionar um novo produto
 *
 * body Produto Produto object que precisa de ser adicionado
 * no response value expected for this operation
 **/
exports.addProduto = function (body) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Associar um produto ao cliente
 * Associar um ou mais produtos a lista de favoritos do cliente
 *
 * body AssociarProdutoCliente  (optional)
 * no response value expected for this operation
 **/
exports.associarProdutoCliente = function (body) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Eliminar um produto pelo produtoId
 *
 * produtoId Integer produtoId necessário para eliminar
 * no response value expected for this operation
 **/
exports.deleteProduto = function (produtoId) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Encontrar produtos por categoria
 * Múltiplos produtos enviados consoante a categoria selecionada
 *
 * categoria List É necessário o envio da categoria para puder ser enviado a lista de produtos correta
 * returns ListaPodutos
 **/
exports.findByCategoria = function (categoria) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [{
      "produto": {
        "precoUnitario": 6.027456183070403,
        "precoPromocional": 1.4658129805029452,
        "produtoId": "produtoId",
        "percentagemDesconto": 5.962133916683182,
        "data": {
          "dataValidade": "2000-01-23",
          "dataProducao": "2000-01-23"
        },
        "categoria": {
          "name": "name",
          "id": 0
        },
        "origem": "origem",
        "nome": "nome",
        "precoKilo": 5.637376656633329,
        "informacao": {
          "informacaoCurta": "informacaoCurta",
          "informacaoComprida": "informacaoComprida"
        },
        "nutricaoPontuacao": "nutricaoPontuacao",
        "informacaoNutricional": {
          "hidratosDeCarbono": 2.027123023002322,
          "peso": 2.3021358869347655,
          "energia": 7.061401241503109,
          "saturados": 3.616076749251911,
          "proteina": 7.386281948385884,
          "lipidos": 9.301444243932576,
          "acucar": 4.145608029883936,
          "sal": 1.2315135367772556
        },
        "codigoBarras": 1.0246457001441578
      }
    }, {
      "produto": {
        "precoUnitario": 6.027456183070403,
        "precoPromocional": 1.4658129805029452,
        "produtoId": "produtoId",
        "percentagemDesconto": 5.962133916683182,
        "data": {
          "dataValidade": "2000-01-23",
          "dataProducao": "2000-01-23"
        },
        "categoria": {
          "name": "name",
          "id": 0
        },
        "origem": "origem",
        "nome": "nome",
        "precoKilo": 5.637376656633329,
        "informacao": {
          "informacaoCurta": "informacaoCurta",
          "informacaoComprida": "informacaoComprida"
        },
        "nutricaoPontuacao": "nutricaoPontuacao",
        "informacaoNutricional": {
          "hidratosDeCarbono": 2.027123023002322,
          "peso": 2.3021358869347655,
          "energia": 7.061401241503109,
          "saturados": 3.616076749251911,
          "proteina": 7.386281948385884,
          "lipidos": 9.301444243932576,
          "acucar": 4.145608029883936,
          "sal": 1.2315135367772556
        },
        "codigoBarras": 1.0246457001441578
      }
    }];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Listar produtos com o preço médio
 * Retorna todos os produtos e o seu preço médio
 *
 * returns ListaPrecoMedio
 **/
exports.getListPrecoMedio = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [{
      "produtoId": "produtoId",
      "precoMedio": 0,
      "detalhe": {
        "precoUnitario": 6.027456183070403,
        "codigo": "codigo",
        "nome": "nome",
        "precoKilo": 1.4658129805029452,
        "descricao": "descricao"
      }
    }, {
      "produtoId": "produtoId",
      "precoMedio": 0,
      "detalhe": {
        "precoUnitario": 6.027456183070403,
        "codigo": "codigo",
        "nome": "nome",
        "precoKilo": 1.4658129805029452,
        "descricao": "descricao"
      }
    }];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Listar todos os produtos
 * Retorna todos os produtos na base dados
 *
 * returns ListaPodutos
 **/
exports.getListProdutos = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [{
      "produto": {
        "precoUnitario": 6.027456183070403,
        "precoPromocional": 1.4658129805029452,
        "produtoId": "produtoId",
        "percentagemDesconto": 5.962133916683182,
        "data": {
          "dataValidade": "2000-01-23",
          "dataProducao": "2000-01-23"
        },
        "categoria": {
          "name": "name",
          "id": 0
        },
        "origem": "origem",
        "nome": "nome",
        "precoKilo": 5.637376656633329,
        "informacao": {
          "informacaoCurta": "informacaoCurta",
          "informacaoComprida": "informacaoComprida"
        },
        "nutricaoPontuacao": "nutricaoPontuacao",
        "informacaoNutricional": {
          "hidratosDeCarbono": 2.027123023002322,
          "peso": 2.3021358869347655,
          "energia": 7.061401241503109,
          "saturados": 3.616076749251911,
          "proteina": 7.386281948385884,
          "lipidos": 9.301444243932576,
          "acucar": 4.145608029883936,
          "sal": 1.2315135367772556
        },
        "codigoBarras": 1.0246457001441578
      }
    }, {
      "produto": {
        "precoUnitario": 6.027456183070403,
        "precoPromocional": 1.4658129805029452,
        "produtoId": "produtoId",
        "percentagemDesconto": 5.962133916683182,
        "data": {
          "dataValidade": "2000-01-23",
          "dataProducao": "2000-01-23"
        },
        "categoria": {
          "name": "name",
          "id": 0
        },
        "origem": "origem",
        "nome": "nome",
        "precoKilo": 5.637376656633329,
        "informacao": {
          "informacaoCurta": "informacaoCurta",
          "informacaoComprida": "informacaoComprida"
        },
        "nutricaoPontuacao": "nutricaoPontuacao",
        "informacaoNutricional": {
          "hidratosDeCarbono": 2.027123023002322,
          "peso": 2.3021358869347655,
          "energia": 7.061401241503109,
          "saturados": 3.616076749251911,
          "proteina": 7.386281948385884,
          "lipidos": 9.301444243932576,
          "acucar": 4.145608029883936,
          "sal": 1.2315135367772556
        },
        "codigoBarras": 1.0246457001441578
      }
    }];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Listar todos os produtos e as suas quantidades não desperdiçadas
 * Listar todos os produtos e as suas quantidades não desperdiçadas, divido por peso líquido e peso bruto
 *
 * returns ListaProdutosNaoDesperdicados
 **/
exports.getListProdutosNaoDesperdicados = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [{
      "quatidadeNaoDesperdicada": 6.027456183070403,
      "produtoId": "produtoId",
      "mediaDesconto": 5.962133916683182,
      "valorPoupado": 0.8008281904610115,
      "nome": "nome",
      "pesoLiquidoNaoDesperdicado": 1.4658129805029452
    }, {
      "quatidadeNaoDesperdicada": 6.027456183070403,
      "produtoId": "produtoId",
      "mediaDesconto": 5.962133916683182,
      "valorPoupado": 0.8008281904610115,
      "nome": "nome",
      "pesoLiquidoNaoDesperdicado": 1.4658129805029452
    }];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Encontrar um produto pelo produtoId
 * Retorna um único produto mais detalhado
 *
 * produtoId Integer produtoId necessário
 * returns Produto
 **/
exports.getProdutoById = function (produtoId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "precoUnitario": 6.027456183070403,
      "precoPromocional": 1.4658129805029452,
      "produtoId": "produtoId",
      "percentagemDesconto": 5.962133916683182,
      "data": {
        "dataValidade": "2000-01-23",
        "dataProducao": "2000-01-23"
      },
      "categoria": {
        "name": "name",
        "id": 0
      },
      "origem": "origem",
      "nome": "nome",
      "precoKilo": 5.637376656633329,
      "informacao": {
        "informacaoCurta": "informacaoCurta",
        "informacaoComprida": "informacaoComprida"
      },
      "nutricaoPontuacao": "nutricaoPontuacao",
      "informacaoNutricional": {
        "hidratosDeCarbono": 2.027123023002322,
        "peso": 2.3021358869347655,
        "energia": 7.061401241503109,
        "saturados": 3.616076749251911,
        "proteina": 7.386281948385884,
        "lipidos": 9.301444243932576,
        "acucar": 4.145608029883936,
        "sal": 1.2315135367772556
      },
      "codigoBarras": 1.0246457001441578
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Listar produtos favoritos do utilizador
 * Lista com algum detalhe dos produtos favoritos do utilizador
 *
 * utilizadorId List É necessário o envio do utilizadorId para puder ser enviado a lista de produtos correta
 * returns ListaProdutosAssociados
 **/
exports.listarAssociarProdutoUtilizador = function (utilizadorId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "listaProduto": [{
        "produto": {
          "precoUnitario": 6.027456183070403,
          "codigo": "codigo",
          "nome": "nome",
          "precoKilo": 1.4658129805029452,
          "descricao": "descricao"
        }
      }, {
        "produto": {
          "precoUnitario": 6.027456183070403,
          "codigo": "codigo",
          "nome": "nome",
          "precoKilo": 1.4658129805029452,
          "descricao": "descricao"
        }
      }],
      "utilizadorId": "utilizadorId"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar um produto através do produtoId
 *
 * body Produto Produto object que precisa de ser adicionado
 * produtoId Integer produtoId necessário
 * no response value expected for this operation
 **/
exports.updateProduto = function (body, produtoId) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}

