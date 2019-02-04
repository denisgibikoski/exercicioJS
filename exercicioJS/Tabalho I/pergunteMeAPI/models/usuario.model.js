const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    nome : String,
    login: String,
    senha: String,
    email: String,
    bio : String,
    foto : String
})

module.exports = mongoose.model('Usuario', usuarioSchema)