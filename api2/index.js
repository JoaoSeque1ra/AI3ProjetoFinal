'use strict';

var path = require('path');
var http = require('http');
const express = require('express')
let app = express()

var oas3Tools = require('oas3-tools');
var serverPort = 8081;

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
app = expressAppConfig.getApp();

const produtoRoutes = require('./routes/ProdutoRoutes')
const utilizadorRoutes = require('./routes/UtilizadorRoutes')

app.use('/produto', produtoRoutes)
app.use('/utilizador', utilizadorRoutes)

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

