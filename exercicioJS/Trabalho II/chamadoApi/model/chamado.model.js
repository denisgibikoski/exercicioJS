const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Types = mongoose.Schema.Types;

var schemaChamado = new Schema({
    descricao: String,
    solicitante: String,
    data: Date,
    status: Number,

    departamento: {
        type: Types.ObjectId,
        ref: 'Departamento'
    }

  
});

module.exports = mongoose.model("Chamado", schemaChamado);