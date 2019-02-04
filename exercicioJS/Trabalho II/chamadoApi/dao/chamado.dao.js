const db = require('../db/db')
const Chamado = require('../model/chamado.model')




exports.salvar = (dados, fnCallback) => {
    db.connect()

    let c = new Chamado(dados)
    c.status = 1
    c.dataEntrada = new Date()
    

    
    p.save( (e, ret) => {
        if (e) {
            console.log(e)
        } 
        
        db.disconnect()
        fnCallback()
    })
}

exports.excluir = (id, fnCallback) => {
    db.connect()

    Pedido.findByIdAndDelete(id, (e, ret) => {
        db.disconnect()
        fnCallback()
    })
}

exports.atualizar = (tarefa, fnCallback) => {
    db.connect()

    Pedido.findByIdAndUpdate(tarefa._id, tarefa, (e, ret) => {
        if (e) {
            console.log(e)
        } 

        db.disconnect()
        fnCallback()
    })
}