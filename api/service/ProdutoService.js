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
      "produtoId": 1,
      "precoMedio": 4.15,
      "detalhe": {
        "precoUnitario": 4,
        "codigo": 546546513,
        "nome": "Bolo de chocolate",
        "id": 1,
        "precoKilo": 14.32,
        "descricao": "Bolo"
      }
    }, {
      "produtoId": 2,
      "precoMedio": 1.25,
      "detalhe": {
        "precoUnitario": 1.25,
        "codigo": 794654654,
        "nome": "Bolacha Maria",
        "id": 2,
        "precoKilo": 26.59,
        "descricao": "Bolacha"
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
        "precoUnitario": 5.2,
        "precoPromocional": 4.2,
        "produtoId": 1,
        "percentagemDesconto": 20.0,
        "data": {
          "dataValidade": "01/01/2022",
          "dataProducao": "01/12/2022",
          "id": 1
        },
        "categoria": {
          "name": "Pedra",
          "id": 1
        },
        "origem": "Portugal",
        "nome": "Pedra espetacular",
        "precoKilo": 5.2,
        "informacao": {
          "informacaoCurta": "Uma pedra muito boa",
          "informacaoComprida": "Pedra da mais alta qualidade",
          "id": 1
        },
        "nutricaoPontuacao": "A",
        "informacaoNutricional": {
          "hidratosDeCarbono": 50.0,
          "peso": 100,
          "energia": 256.3,
          "saturados": 1.0,
          "proteina": 53.2,
          "id": 1,
          "lipidos": 23.1,
          "acucar": 0.3,
          "sal": 0.1
        },
        "codigoBarras": 149843216
      }
    }, {
      "produto": {
        "precoUnitario": 53.25,
        "precoPromocional": 40.65,
        "produtoId": 2,
        "percentagemDesconto": 13.25,
        "data": {
          "dataValidade": "09/09/2022",
          "dataProducao": "23/12/2025",
          "id": 2
        },
        "categoria": {
          "name": "Pedra Inclinada",
          "id": 2
        },
        "origem": "Portugal",
        "nome": "Pedra espetacular, mas inclinada",
        "precoKilo": 50.23,
        "informacao": {
          "informacaoCurta": "Uma pedra muito boa, mas inclinada",
          "informacaoComprida": "Pedra da mais alta qualidade, ligeiramente inclinada, mas só um pouco mesmo",
          "id": 2
        },
        "nutricaoPontuacao": "B",
        "informacaoNutricional": {
          "hidratosDeCarbono": 50.0,
          "peso": 100,
          "energia": 256.3,
          "saturados": 1.0,
          "proteina": 53.2,
          "id": 1,
          "lipidos": 23.1,
          "acucar": 0.3,
          "sal": 0.1
        },
        "codigoBarras": 786454997
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
      "produtoId": 1,
      "mediaDesconto": 12.23,
      "valorPoupado": 2645.2,
      "quantidadeNaoDesperdicada": 120.32,
      "nome": "Sopa da pedra",
      "pesoLiquidoNaoDesperdicado": 235.1
    }, {
      "produtoId": 2,
      "mediaDesconto": 1.0,
      "valorPoupado": 10.23,
      "quantidadeNaoDesperdicada": 10.23,
      "nome": "Bolo de pedra",
      "pesoLiquidoNaoDesperdicado": 12.2
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
          "precoUnitario": 10.2,
          "codigo": 464875321,
          "nome": "Bolacha",
          "id": 1,
          "precoKilo": 1.12,
          "descricao": "Bolacha maria, mesmo deliciosa"
        }
      }, {
        "produto": {
          "precoUnitario": 1,
          "codigo": 5456963520,
          "nome": "Pedra pesada",
          "id": 2,
          "precoKilo": 1,
          "descricao": "Uma pedra extremamente pesada"
        }
      }],
      "utilizadorId": 1
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
      "precoUnitario": 53.25,
      "precoPromocional": 40.65,
      "produtoId": 2,
      "percentagemDesconto": 13.25,
      "data": {
        "dataValidade": "09/09/2022",
        "dataProducao": "23/12/2025",
        "id": 2
      },
      "categoria": {
        "name": "Pedra Inclinada",
        "id": 2
      },
      "origem": "Portugal",
      "nome": "Pedra espetacular, mas inclinada",
      "precoKilo": 50.23,
      "informacao": {
        "informacaoCurta": "Uma pedra muito boa, mas inclinada",
        "informacaoComprida": "Pedra da mais alta qualidade, ligeiramente inclinada, mas só um pouco mesmo",
        "id": 2
      },
      "nutricaoPontuacao": "B",
      "informacaoNutricional": {
        "hidratosDeCarbono": 50.0,
        "peso": 100,
        "energia": 256.3,
        "saturados": 1.0,
        "proteina": 53.2,
        "id": 1,
        "lipidos": 23.1,
        "acucar": 0.3,
        "sal": 0.1
      },
      "codigoBarras": 786454997
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
        "precoUnitario": 5.2,
        "precoPromocional": 4.2,
        "produtoId": 1,
        "percentagemDesconto": 20.0,
        "data": {
          "dataValidade": "01/01/2022",
          "dataProducao": "01/12/2022",
          "id": 1
        },
        "categoria": {
          "name": "Pedra",
          "id": 1
        },
        "origem": "Portugal",
        "nome": "Pedra espetacular",
        "precoKilo": 5.2,
        "informacao": {
          "informacaoCurta": "Uma pedra muito boa",
          "informacaoComprida": "Pedra da mais alta qualidade",
          "id": 1
        },
        "nutricaoPontuacao": "A",
        "informacaoNutricional": {
          "hidratosDeCarbono": 50.0,
          "peso": 100,
          "energia": 256.3,
          "saturados": 1.0,
          "proteina": 53.2,
          "id": 1,
          "lipidos": 23.1,
          "acucar": 0.3,
          "sal": 0.1
        },
        "codigoBarras": 149843216
      }
    }, {
      "produto": {
        "precoUnitario": 53.25,
        "precoPromocional": 40.65,
        "produtoId": 2,
        "percentagemDesconto": 13.25,
        "data": {
          "dataValidade": "09/09/2022",
          "dataProducao": "23/12/2025",
          "id": 2
        },
        "categoria": {
          "name": "Pedra Inclinada",
          "id": 2
        },
        "origem": "Portugal",
        "nome": "Pedra espetacular, mas inclinada",
        "precoKilo": 50.23,
        "informacao": {
          "informacaoCurta": "Uma pedra muito boa, mas inclinada",
          "informacaoComprida": "Pedra da mais alta qualidade, ligeiramente inclinada, mas só um pouco mesmo",
          "id": 2
        },
        "nutricaoPontuacao": "B",
        "informacaoNutricional": {
          "hidratosDeCarbono": 50.0,
          "peso": 100,
          "energia": 256.3,
          "saturados": 1.0,
          "proteina": 53.2,
          "id": 1,
          "lipidos": 23.1,
          "acucar": 0.3,
          "sal": 0.1
        },
        "codigoBarras": 786454997
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
 * returns Produto
 **/
exports.postProduto = function (body) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "precoUnitario": 5.2,
      "precoPromocional": 4.2,
      "produtoId": 1,
      "percentagemDesconto": 20.0,
      "data": {
        "dataValidade": "01/01/2022",
        "dataProducao": "01/12/2022",
        "id": 1
      },
      "categoria": {
        "name": "Pedra",
        "id": 1
      },
      "origem": "Portugal",
      "nome": "Pedra espetacular",
      "precoKilo": 5.2,
      "informacao": {
        "informacaoCurta": "Uma pedra muito boa",
        "informacaoComprida": "Pedra da mais alta qualidade",
        "id": 1
      },
      "nutricaoPontuacao": "A",
      "informacaoNutricional": {
        "hidratosDeCarbono": 50.0,
        "peso": 100,
        "energia": 256.3,
        "saturados": 1.0,
        "proteina": 53.2,
        "id": 1,
        "lipidos": 23.1,
        "acucar": 0.3,
        "sal": 0.1
      },
      "codigoBarras": 1498432168432163
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      reject();
    }
  });
}


/**
 * Atualizar um produto através do produtoId
 * Atualiza um produto
 *
 * body Produto  (optional)
 * produtoId Integer produtoId necessário
 * returns Produto
 **/
exports.putProduto = function (body, produtoId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "precoUnitario": 5.2,
      "precoPromocional": 4.2,
      "produtoId": 1,
      "percentagemDesconto": 20.0,
      "data": {
        "dataValidade": "31/12/2022",
        "dataProducao": "01/01/2022",
        "id": 1
      },
      "categoria": {
        "name": "Pedra",
        "id": 1
      },
      "origem": "Portugal",
      "nome": "Pedra espetacular",
      "precoKilo": 5.2,
      "informacao": {
        "informacaoCurta": "Uma pedra muito boa",
        "informacaoComprida": "Pedra da mais alta qualidade",
        "id": 1
      },
      "nutricaoPontuacao": "A",
      "informacaoNutricional": {
        "hidratosDeCarbono": 50.0,
        "peso": 100,
        "energia": 256.3,
        "saturados": 1.0,
        "proteina": 53.2,
        "id": 1,
        "lipidos": 23.1,
        "acucar": 0.3,
        "sal": 0.1
      },
      "codigoBarras": 1498432168432163
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      reject();
    }
  });
}

