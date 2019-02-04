const mongoose = require('mongoose')
const types = mongoose.Schema.Types

const perguntaSchema = new mongoose.Schema({   
    descricao     :String,
    dataPergunta  :Date, 
    remetente : {
        type : types.ObjectId,
        ref : 'Usuario'
    },
    destinatario : {
        type : types.ObjectId,
        ref : 'Usuario'
    },
    resposta     : String,
    dataResposta : Date
})

module.exports = mongoose.model("Pergunta", perguntaSchema)