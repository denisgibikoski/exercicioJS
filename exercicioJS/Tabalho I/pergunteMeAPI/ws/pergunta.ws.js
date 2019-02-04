const dao = require('../dao/pergunta.dao')

const mostraMsg = false

module.exports = (app) => {

    app.route('/restrito/pergunta/listar').post( (req, res) => {
        console.log('listando perguntas: ')
        let usuario = req.body
        if(mostraMsg)
        console.log('listando perguntas: ')

        dao.listar(usuario, (result) => {
            res.json(result)
        })
    })

    app.route('/restrito/pergunta/listaRespondidas').post( (req, res) => {
        let usuario = req.body
        if(mostraMsg)
        console.log('listando perguntas: ')

        dao.listaRespondidas(usuario, (result) => {
            res.json(result)
        })
    })

    app.route('/restrito/pergunta/listaRecebidas').post( (req, res) => {
        let usuario = req.body

        if(mostraMsg)
           console.log('listando perguntas recebidas: ' + usuario.login)
        
        dao.listaRecebidas(usuario, (result) => {
            res.json(result)
        })
    })

    app.route('/restrito/pergunta/listarPergunta').post( (req, res) => {
        let perg = req.body
  
        if(mostraMsg)
           console.log('listando perguntas: ID ' + perg._id)

        dao.listarPergunta(perg._id, (result) => {  
            res.json(result)
        })
    })

    app.route('/restrito/pergunta/salvar').post( (req, res) => {
        let dados = req.body

        if(mostraMsg)
           console.log('vai salvar pergunta: ' + dados)
        
        dao.salvar(dados, () => {
            res.json({})
        })
    })

    app.route('/restrito/pergunta/ignorar/:id').get( (req, res) => {
        let id = req.params.id

        if(mostraMsg)
           console.log('deletando pergunta')
        
        dao.ignorar(id, () => {
            res.json({})
        })
    })

    app.route('/restrito/pergunta/responder').post( (req, res) => {
        let dados = req.body
        
        if(mostraMsg)
           console.log('atualizando pergunta')

        dao.atualizar(dados, () => {
            res.json({})
        })
    })

}