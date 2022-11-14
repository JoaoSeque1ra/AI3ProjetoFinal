const express = require('express')

const app = express()
app.set('port', process.env.PORT || 4001)

// Rota de Introdução
app.use('/', (req, res) => {
    res.send('Backend no ar');
})

app.listen(app.get('port'), () => {
    console.log('Backend (port:' + app.get('port') + ')')
})