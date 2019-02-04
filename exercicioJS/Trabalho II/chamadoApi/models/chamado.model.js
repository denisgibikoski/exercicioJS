const mongoose = require('mongoose')
const types = mongoose.Schema.Types

const chamadoSchema = new mongoose.Schema({    
    descricao : String,
    data : Date,
    solicitante : String,
    status : Number,
    departamento : {
        type : types.ObjectId,
        ref : 'Departamento'
    }
})

module.exports = mongoose.model("Chamado", chamadoSchema)