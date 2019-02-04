const dao = require('../dao/departamento.dao')

module.exports = (app) => {

    app.route('/departamento/listar').get( (req, res) => {
        dao.listar( (ret) => {
            res.json(ret)
        })
    })

}