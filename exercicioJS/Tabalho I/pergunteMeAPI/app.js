const express = require('express')
const cors = require('cors')

const wsPerg = require('./ws/pergunta.ws')
const wsUser = require('./ws/usuario.ws')

const loginCheck = require('./loginCheck')

const app = express()


app.use(express.json())
app.use(cors())

loginCheck(app)

wsPerg(app)
wsUser(app)

app.listen(3000, () => {
    console.log('Servidor iniciado ')
})