const express = require("express");
const router = express.Router();

const produtoController = require('../controllers/Produto')

router.get('/', [produtoController.getListProdutos])

module.exports = router