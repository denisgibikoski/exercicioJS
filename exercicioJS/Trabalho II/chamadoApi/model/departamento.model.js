const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var schemaDepartamento = new Schema({
     nome: String   
});

module.exports = mongoose.model("Departamento", schemaDepartamento);