const mongoose = require('mongoose')

const departamentoSchema = new mongoose.Schema({
    nome : String
})

module.exports = mongoose.model('Departamento', departamentoSchema)