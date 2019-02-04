const dao = require('../dao/chamado.dao')

module.exports = (app) => {

    app.route('/chamado/listar').get( (req, res) => {
        dao.listar( (result) => {
            res.json(result)
        })
    })

    app.route('/chamado/salvar').post( (req, res) => {
        let dados = req.body
        
        dao.salvar(dados, () => {
            res.json({})
        })
    })

    app.route('/chamado/excluir/:id').get( (req, res) => {
        let id = req.params.id
        
        dao.excluir(id, () => {
            res.json({})
        })
    })

    app.route('/chamado/atualizar').post( (req, res) => {
        let dados = req.body
        
        dao.atualizar(dados, () => {
            res.json({})
        })
    })

}