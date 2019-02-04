const db = require('../db/db')
const Departamento = require('../models/departamento.model')

exports.listar = (fnCallback) => {
    db.connect()
    Departamento.find( (e, ret) => {
        db.disconnect()
        fnCallback(ret)
    })
}