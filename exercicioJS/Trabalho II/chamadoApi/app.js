const express = require('express')
const cors = require('cors')

const service = require('./service/chamado.service')


const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log("Clinete Connectado")

    socket.on('mensagem', (msg) => {
        console.log("Mensagem recebida: " + msg)

        io.emit('broadcastMsg', msg)
    })

    socket.on('disconnect', () => {
        console.log("Cliente desconetado")
    })
})

app.use(cors())
app.use(express.json())

service(app)


app.listen(3000, () => {
    console.log('Servidor iniciado')
})



