const db = require('../db/db')
const mongoose = require('mongoose')
const Pergunta = require('../models/pergunta.model')
const Usuario = require('../models/usuario.model')

const daoUser = require('./usuario.dao')

const mostraMsg = false

exports.listar = (usuario, fnCallback) => {
    db.connect()
     
    let u  = new Usuario(usuario);

    if(mostraMsg)
        console.log('Veio listar por USUARIO ' + u._id)

    let q = Pergunta.find({ destinatario : u, resposta : null})
    q.sort('-dataPergunta')
    q.populate('remetente')
    q.populate('destinatario')
    q.exec( (e, ret) => {
        console.log(ret)
        db.disconnect()
        fnCallback(ret)
    })
}

exports.listaRespondidas = (usuario, fnCallback) => {
    db.connect()
    let u  = new Usuario(usuario);

    if(mostraMsg)
        console.log('Veio listar Respondidas ' + u._id)

    let q = Pergunta.find({ remetente : u, resposta : /^/})
    q.sort('-dataPergunta')
    q.populate('remetente')
    q.populate('destinatario')
    q.exec( (e, ret) => {
        console.log(ret)
        db.disconnect()
        fnCallback(ret)
    })
}

exports.listaRecebidas = (usuario, fnCallback) => {
    db.connect()
    let u  = new Usuario(usuario);

    if(mostraMsg)
        console.log('Veio listar Recebidas ' + u.login)

    daoUser.buscarUsuario(u.login, (result) => {  

        let us  = new Usuario(result[0]);

        let q = Pergunta.find({ destinatario : us._id, resposta : /^/})
        q.sort('-dataPergunta')
        q.populate('remetente')
        q.populate('destinatario')
        q.exec( (e, ret) => {
        if(mostraMsg) 
           console.log('saida ' + ret)
        db.disconnect()
        fnCallback(ret)
    })
    })    
}

exports.listarPergunta = (id, fnCallback) => {
    db.connect()

    if(mostraMsg)
        console.log('Veio listar por ID ' + id )

    let q = Pergunta.find({_id : id})
    q.sort('-dataPergunta')
    q.populate('remetente')
    q.populate('destinatario')
    q.exec( (e, ret) => {
        console.log(ret)
        db.disconnect()
        fnCallback(ret)
    })
}

exports.salvar = (dados, fnCallback) => {
    db.connect()

    let p = new Pergunta(dados)
    p.dataPergunta = new Date()
     
    if(mostraMsg)
       console.log('Veio salvar Pergunta')
    
    p.save( (e, ret) => {
        if (e) {
           console.log('Erro Salvar: ' + e)
        } 
            
        db.disconnect()
        fnCallback()
    }) 
}

exports.ignorar = (id, fnCallback) => {
    db.connect()

    Pergunta.findByIdAndDelete(id, (e, ret) => {
        db.disconnect()
        fnCallback()
    })
}

exports.atualizar = (perg, fnCallback) => {
    db.connect()

    perg.dataResposta = new Date() 

    if(mostraMsg)
       console.log('Veio salvar Resposta') 

    Pergunta.findByIdAndUpdate(perg._id, perg, (e, ret) => {
        if (e) {
            console.log(e)
        } 

        db.disconnect()
        fnCallback()
    })
}