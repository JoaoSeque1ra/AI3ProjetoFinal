'use strict';


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
 * Listar produtos com o preço medio
 * Retorna todos os produtos e o seu preço medio
 *
 * returns ListaPrecoMedio
 **/
exports.getListPrecoMedio = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [{
      "produtoId": 0,
      "precoMedio": 0.6027456183070403,
      "detalhe": {
        "precoUnitario": 0.5637376656633328,
        "codigo": 5,
        "nome": "nome",
        "id": 1,
        "precoKilo": 0.23021358869347652,
        "descricao": "descricao"
      }
    }, {
      "produtoId": 0,
      "precoMedio": 0.6027456183070403,
      "detalhe": {
        "precoUnitario": 0.5637376656633328,
        "codigo": 5,
        "nome": "nome",
        "id": 1,
        "precoKilo": 0.23021358869347652,
        "descricao": "descricao"
      }
    }];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      reject();
    }
  });
}


/**
 * Listar todos os produtos
 * Retorna todos os produtos na base dados
 *
 * returns ListaProdutos
 **/
exports.getListProdutos = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [{
      "produto": {
        "precoUnitario": 0.5962133916683182,
        "precoPromocional": 0.5637376656633328,
        "produtoId": 0,
        "percentagemDesconto": 0.23021358869347652,
        "data": {
          "dataValidade": "dataValidade",
          "dataProducao": "dataProducao",
          "id": 7
        },
        "categoria": {
          "name": "name",
          "id": 6
        },
        "origem": "origem",
        "nome": "nome",
        "precoKilo": 0.7061401241503109,
        "informacao": {
          "informacaoCurta": "informacaoCurta",
          "informacaoComprida": "informacaoComprida",
          "id": 1
        },
        "nutricaoPontuacao": "nutricaoPontuacao",
        "informacaoNutricional": {
          "hidratosDeCarbono": 0.12315135367772556,
          "peso": 0,
          "energia": 0.20271230230023218,
          "saturados": 0.7386281948385884,
          "proteina": 0.14894159098541704,
          "id": 9,
          "lipidos": 0.4145608029883936,
          "acucar": 0.10246457001441578,
          "sal": 0.684685269835264
        },
        "codigoBarras": 1
      }
    }, {
      "produto": {
        "precoUnitario": 0.5962133916683182,
        "precoPromocional": 0.5637376656633328,
        "produtoId": 0,
        "percentagemDesconto": 0.23021358869347652,
        "data": {
          "dataValidade": "dataValidade",
          "dataProducao": "dataProducao",
          "id": 7
        },
        "categoria": {
          "name": "name",
          "id": 6
        },
        "origem": "origem",
        "nome": "nome",
        "precoKilo": 0.7061401241503109,
        "informacao": {
          "informacaoCurta": "informacaoCurta",
          "informacaoComprida": "informacaoComprida",
          "id": 1
        },
        "nutricaoPontuacao": "nutricaoPontuacao",
        "informacaoNutricional": {
          "hidratosDeCarbono": 0.12315135367772556,
          "peso": 0,
          "energia": 0.20271230230023218,
          "saturados": 0.7386281948385884,
          "proteina": 0.14894159098541704,
          "id": 9,
          "lipidos": 0.4145608029883936,
          "acucar": 0.10246457001441578,
          "sal": 0.684685269835264
        },
        "codigoBarras": 1
      }
    }];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      reject();
    }
  });
}


/**
 * Listar todos os produtos e as suas quantidades não desperdiçadas
 * Listar todos os produtos e as suas quantidades não desperdiçadas, divido por peso liquido e peso bruto
 *
 * returns ListaProdutosNaoDesperdicados
 **/
exports.getListProdutosNaoDesperdicados = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [{
      "produtoId": 0,
      "mediaDesconto": 0.5637376656633328,
      "valorPoupado": 0.6027456183070403,
      "quantidadeNaoDesperdicada": 0.14658129805029452,
      "nome": "nome",
      "pesoLiquidoNaoDesperdicado": 0.5962133916683182
    }, {
      "produtoId": 0,
      "mediaDesconto": 0.5637376656633328,
      "valorPoupado": 0.6027456183070403,
      "quantidadeNaoDesperdicada": 0.14658129805029452,
      "nome": "nome",
      "pesoLiquidoNaoDesperdicado": 0.5962133916683182
    }];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      reject();
    }
  });
}


/**
 * Listar produtos favoritos do utilizador
 * Lista com algum detalhe os produtos favoritos do utilizador
 *
 * utilizadorId List É necessário o envio do utilizadorId para puder ser enviado a lista de produtos correta
 * returns ListaProdutosAssociados
 **/
exports.getListarAssociarProdutoUtilizador = function (utilizadorId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "listaProduto": [{
        "produto": {
          "precoUnitario": 0.5637376656633328,
          "codigo": 5,
          "nome": "nome",
          "id": 1,
          "precoKilo": 0.23021358869347652,
          "descricao": "descricao"
        }
      }, {
        "produto": {
          "precoUnitario": 0.5637376656633328,
          "codigo": 5,
          "nome": "nome",
          "id": 1,
          "precoKilo": 0.23021358869347652,
          "descricao": "descricao"
        }
      }],
      "utilizadorId": 0
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      reject();
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
exports.getProduto = function (produtoId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "precoUnitario": 0.5962133916683182,
      "precoPromocional": 0.5637376656633328,
      "produtoId": 0,
      "percentagemDesconto": 0.23021358869347652,
      "data": {
        "dataValidade": "dataValidade",
        "dataProducao": "dataProducao",
        "id": 7
      },
      "categoria": {
        "name": "name",
        "id": 6
      },
      "origem": "origem",
      "nome": "nome",
      "precoKilo": 0.7061401241503109,
      "informacao": {
        "informacaoCurta": "informacaoCurta",
        "informacaoComprida": "informacaoComprida",
        "id": 1
      },
      "nutricaoPontuacao": "nutricaoPontuacao",
      "informacaoNutricional": {
        "hidratosDeCarbono": 0.12315135367772556,
        "peso": 0,
        "energia": 0.20271230230023218,
        "saturados": 0.7386281948385884,
        "proteina": 0.14894159098541704,
        "id": 9,
        "lipidos": 0.4145608029883936,
        "acucar": 0.10246457001441578,
        "sal": 0.684685269835264
      },
      "codigoBarras": 1
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      reject();
    }
  });
}


/**
 * Encontrar produtos por categoria
 * Múltiplos produtos enviados consoante a categoria selecionada
 *
 * categoria List É necessário o envio da categoria para puder ser enviado a lista de produtos correta
 * returns ListaProdutos
 **/
exports.getProdutoByCategoria = function (categoria) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [{
      "produto": {
        "precoUnitario": 0.5962133916683182,
        "precoPromocional": 0.5637376656633328,
        "produtoId": 0,
        "percentagemDesconto": 0.23021358869347652,
        "data": {
          "dataValidade": "dataValidade",
          "dataProducao": "dataProducao",
          "id": 7
        },
        "categoria": {
          "name": "name",
          "id": 6
        },
        "origem": "origem",
        "nome": "nome",
        "precoKilo": 0.7061401241503109,
        "informacao": {
          "informacaoCurta": "informacaoCurta",
          "informacaoComprida": "informacaoComprida",
          "id": 1
        },
        "nutricaoPontuacao": "nutricaoPontuacao",
        "informacaoNutricional": {
          "hidratosDeCarbono": 0.12315135367772556,
          "peso": 0,
          "energia": 0.20271230230023218,
          "saturados": 0.7386281948385884,
          "proteina": 0.14894159098541704,
          "id": 9,
          "lipidos": 0.4145608029883936,
          "acucar": 0.10246457001441578,
          "sal": 0.684685269835264
        },
        "codigoBarras": 1
      }
    }, {
      "produto": {
        "precoUnitario": 0.5962133916683182,
        "precoPromocional": 0.5637376656633328,
        "produtoId": 0,
        "percentagemDesconto": 0.23021358869347652,
        "data": {
          "dataValidade": "dataValidade",
          "dataProducao": "dataProducao",
          "id": 7
        },
        "categoria": {
          "name": "name",
          "id": 6
        },
        "origem": "origem",
        "nome": "nome",
        "precoKilo": 0.7061401241503109,
        "informacao": {
          "informacaoCurta": "informacaoCurta",
          "informacaoComprida": "informacaoComprida",
          "id": 1
        },
        "nutricaoPontuacao": "nutricaoPontuacao",
        "informacaoNutricional": {
          "hidratosDeCarbono": 0.12315135367772556,
          "peso": 0,
          "energia": 0.20271230230023218,
          "saturados": 0.7386281948385884,
          "proteina": 0.14894159098541704,
          "id": 9,
          "lipidos": 0.4145608029883936,
          "acucar": 0.10246457001441578,
          "sal": 0.684685269835264
        },
        "codigoBarras": 1
      }
    }];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      reject();
    }
  });
}


/**
 * Associar um produto ao cliente
 * Associar um ou mais produtos a lista de favoritos do cliente
 *
 * body AssociarProdutoCliente  (optional)
 * no response value expected for this operation
 **/
exports.postAssociarProdutoCliente = function (body) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Adicionar um novo produto
 *
 * body Produto  (optional)
 * no response value expected for this operation
 **/
exports.postProduto = function (body) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Atualizar um produto através do produtoId
 * Atualiza um produto
 *
 * body Produto  (optional)
 * produtoId Integer produtoId necessário
 * no response value expected for this operation
 **/
exports.putProduto = function (body, produtoId) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}

