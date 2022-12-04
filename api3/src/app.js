const express = require('express')
const app = express()

const serverPort = 8082

app.get('/', (req, res) => {
    res.send('Rota teste aqui')
})

app.listen(serverPort, () => {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
})