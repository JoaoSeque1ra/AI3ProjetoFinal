'use strict';


/**
 * Eliminar um produto pelo produtoId
 *
 * produtoId Integer produtoId necessário para eliminar
 * no response value expected for this operation
 **/
exports.deleteProduto = function(produtoId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Listar produtos com o preço medio
 * Retorna todos os produtos e o seu preço medio
 *
 * returns ListaPrecoMedio
 **/
exports.getListPrecoMedio = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "produtoId" : 0.8008281904610115,
  "precoMedio" : 6,
  "detalhe" : {
    "precoUnitario" : 5.637376656633329,
    "codigo" : 5,
    "nome" : "nome",
    "id" : 1,
    "precoKilo" : 2.3021358869347655,
    "descricao" : "descricao"
  }
}, {
  "produtoId" : 0.8008281904610115,
  "precoMedio" : 6,
  "detalhe" : {
    "precoUnitario" : 5.637376656633329,
    "codigo" : 5,
    "nome" : "nome",
    "id" : 1,
    "precoKilo" : 2.3021358869347655,
    "descricao" : "descricao"
  }
} ];
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
 * returns ListaProdutos
 **/
exports.getListProdutos = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "produto" : {
    "precoUnitario" : 1.0,
    "precoPromocional" : 1.0,
    "produtoId" : 1,
    "percentagemDesconto" : 1.0,
    "data" : {
      "dataValidade" : "2000-01-23",
      "dataProducao" : "2000-01-23",
      "id" : 7
    },
    "categoria" : {
      "name" : "name",
      "id" : 6.027456183070403
    },
    "origem" : "origem",
    "nome" : "nome",
    "precoKilo" : 1.0,
    "informacao" : {
      "informacaoCurta" : "informacaoCurta",
      "informacaoComprida" : "informacaoComprida",
      "id" : 1.4658129805029452
    },
    "nutricaoPontuacao" : "nutricaoPontuacao",
    "informacaoNutricional" : {
      "hidratosDeCarbono" : 1.2315135367772556,
      "peso" : 3,
      "energia" : 2.027123023002322,
      "saturados" : 7.386281948385884,
      "proteina" : 1.4894159098541704,
      "id" : 9,
      "lipidos" : 4.145608029883936,
      "acucar" : 1.0246457001441578,
      "sal" : 6.84685269835264
    },
    "codigoBarras" : 1
  }
}, {
  "produto" : {
    "precoUnitario" : 1.0,
    "precoPromocional" : 1.0,
    "produtoId" : 1,
    "percentagemDesconto" : 1.0,
    "data" : {
      "dataValidade" : "2000-01-23",
      "dataProducao" : "2000-01-23",
      "id" : 7
    },
    "categoria" : {
      "name" : "name",
      "id" : 6.027456183070403
    },
    "origem" : "origem",
    "nome" : "nome",
    "precoKilo" : 1.0,
    "informacao" : {
      "informacaoCurta" : "informacaoCurta",
      "informacaoComprida" : "informacaoComprida",
      "id" : 1.4658129805029452
    },
    "nutricaoPontuacao" : "nutricaoPontuacao",
    "informacaoNutricional" : {
      "hidratosDeCarbono" : 1.2315135367772556,
      "peso" : 3,
      "energia" : 2.027123023002322,
      "saturados" : 7.386281948385884,
      "proteina" : 1.4894159098541704,
      "id" : 9,
      "lipidos" : 4.145608029883936,
      "acucar" : 1.0246457001441578,
      "sal" : 6.84685269835264
    },
    "codigoBarras" : 1
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Listar todos os produtos e as suas quantidades não desperdiçadas
 * Listar todos os produtos e as suas quantidades não desperdiçadas, divido por peso liquido e peso bruto
 *
 * returns ListaProdutosNaoDesperdicados
 **/
exports.getListProdutosNaoDesperdicados = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "produtoId" : 0.8008281904610115,
  "mediaDesconto" : 5.637376656633329,
  "valorPoupado" : 6.027456183070403,
  "quantidadeNaoDesperdicada" : 1.4658129805029452,
  "nome" : "nome",
  "pesoLiquidoNaoDesperdicado" : 5.962133916683182
}, {
  "produtoId" : 0.8008281904610115,
  "mediaDesconto" : 5.637376656633329,
  "valorPoupado" : 6.027456183070403,
  "quantidadeNaoDesperdicada" : 1.4658129805029452,
  "nome" : "nome",
  "pesoLiquidoNaoDesperdicado" : 5.962133916683182
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
exports.getListarAssociarProdutoUtilizador = function(utilizadorId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "listaProduto" : [ {
    "produto" : {
      "precoUnitario" : 5.637376656633329,
      "codigo" : 5,
      "nome" : "nome",
      "id" : 1,
      "precoKilo" : 2.3021358869347655,
      "descricao" : "descricao"
    }
  }, {
    "produto" : {
      "precoUnitario" : 5.637376656633329,
      "codigo" : 5,
      "nome" : "nome",
      "id" : 1,
      "precoKilo" : 2.3021358869347655,
      "descricao" : "descricao"
    }
  } ],
  "utilizadorId" : 0.8008281904610115
};
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
exports.getProduto = function(produtoId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "precoUnitario" : 1.0,
  "precoPromocional" : 1.0,
  "produtoId" : 1,
  "percentagemDesconto" : 1.0,
  "data" : {
    "dataValidade" : "2000-01-23",
    "dataProducao" : "2000-01-23",
    "id" : 7
  },
  "categoria" : {
    "name" : "name",
    "id" : 6.027456183070403
  },
  "origem" : "origem",
  "nome" : "nome",
  "precoKilo" : 1.0,
  "informacao" : {
    "informacaoCurta" : "informacaoCurta",
    "informacaoComprida" : "informacaoComprida",
    "id" : 1.4658129805029452
  },
  "nutricaoPontuacao" : "nutricaoPontuacao",
  "informacaoNutricional" : {
    "hidratosDeCarbono" : 1.2315135367772556,
    "peso" : 3,
    "energia" : 2.027123023002322,
    "saturados" : 7.386281948385884,
    "proteina" : 1.4894159098541704,
    "id" : 9,
    "lipidos" : 4.145608029883936,
    "acucar" : 1.0246457001441578,
    "sal" : 6.84685269835264
  },
  "codigoBarras" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
exports.getProdutoByCategoria = function(categoria) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "produto" : {
    "precoUnitario" : 1.0,
    "precoPromocional" : 1.0,
    "produtoId" : 1,
    "percentagemDesconto" : 1.0,
    "data" : {
      "dataValidade" : "2000-01-23",
      "dataProducao" : "2000-01-23",
      "id" : 7
    },
    "categoria" : {
      "name" : "name",
      "id" : 6.027456183070403
    },
    "origem" : "origem",
    "nome" : "nome",
    "precoKilo" : 1.0,
    "informacao" : {
      "informacaoCurta" : "informacaoCurta",
      "informacaoComprida" : "informacaoComprida",
      "id" : 1.4658129805029452
    },
    "nutricaoPontuacao" : "nutricaoPontuacao",
    "informacaoNutricional" : {
      "hidratosDeCarbono" : 1.2315135367772556,
      "peso" : 3,
      "energia" : 2.027123023002322,
      "saturados" : 7.386281948385884,
      "proteina" : 1.4894159098541704,
      "id" : 9,
      "lipidos" : 4.145608029883936,
      "acucar" : 1.0246457001441578,
      "sal" : 6.84685269835264
    },
    "codigoBarras" : 1
  }
}, {
  "produto" : {
    "precoUnitario" : 1.0,
    "precoPromocional" : 1.0,
    "produtoId" : 1,
    "percentagemDesconto" : 1.0,
    "data" : {
      "dataValidade" : "2000-01-23",
      "dataProducao" : "2000-01-23",
      "id" : 7
    },
    "categoria" : {
      "name" : "name",
      "id" : 6.027456183070403
    },
    "origem" : "origem",
    "nome" : "nome",
    "precoKilo" : 1.0,
    "informacao" : {
      "informacaoCurta" : "informacaoCurta",
      "informacaoComprida" : "informacaoComprida",
      "id" : 1.4658129805029452
    },
    "nutricaoPontuacao" : "nutricaoPontuacao",
    "informacaoNutricional" : {
      "hidratosDeCarbono" : 1.2315135367772556,
      "peso" : 3,
      "energia" : 2.027123023002322,
      "saturados" : 7.386281948385884,
      "proteina" : 1.4894159098541704,
      "id" : 9,
      "lipidos" : 4.145608029883936,
      "acucar" : 1.0246457001441578,
      "sal" : 6.84685269835264
    },
    "codigoBarras" : 1
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
exports.postAssociarProdutoCliente = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Adicionar um novo produto
 *
 * body Produto Produto object que precisa de ser adicionado
 * no response value expected for this operation
 **/
exports.postProduto = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Atualizar um produto através do produtoId
 * Atualiza um produto
 *
 * body Produto Produto object que precisa de ser adicionado
 * produtoId Integer produtoId necessário
 * no response value expected for this operation
 **/
exports.putProduto = function(body,produtoId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

