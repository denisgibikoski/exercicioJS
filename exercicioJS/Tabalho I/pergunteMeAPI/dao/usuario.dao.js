const db = require('../db/db')
const Usuario = require('../models/usuario.model')

mostraMsg = false

exports.listar = (fnCallback) => {
    db.connect()

    let q = Usuario.find({ })

    q.exec( (e, ret) => {
        db.disconnect()
        fnCallback(ret)
    })
}

exports.salvarInc = (usuario, fnCallback) => {
    db.connect()
    let u = new Usuario(usuario);
    if(mostraMsg)
       console.log('veio salvar a inclusao')
       
    u.save( (e,res) => {
        if(e != null){ 
            console.log('SALVAR: ' + e)
        }

        db.disconnect();
        fnCallback();
    });
}

exports.salvarAlter = (usuario, fnCallback) => {
    db.connect()

    let u = new Usuario(usuario);

    if(mostraMsg)
       console.log('Atualizando cadastro')

    Usuario.findByIdAndUpdate(u._id, u, (e, ret) =>{
        if(e){
            console.log('ERRO ATUALIZAR User: ' +e);
        }
        
        db.disconnect();
        fnCallback(ret);
    })          
}

exports.consultar = (usuario, fnCallback) => {
    db.connect();

    let u = new Usuario(usuario);

    Usuario.findOne( { login : u.login, senha : u.senha }, (e, res) => {

        if(mostraMsg)
           console.log('LOGIN ' + res)

        db.disconnect();
        fnCallback(res);
    });
}

exports.validarCadastro = (usuario, fnCallback) => {
    db.connect(); 
    let u = new Usuario(usuario);

    Usuario.findOne( { $or: [ 
                                {email : u.email} ,
                                {login : u.login}
                            ] 
                     }, (e, res) => {

        if(mostraMsg)
           console.log('RETORNO VALIDA EMAIL-LOGIN => ' + res)

        if(res != null) 
                        
           db.disconnect(); 

        fnCallback(res);
    });
}


exports.buscarUsuario = (user, fnCallback) => {
    db.connect()

    //console.log('veio ' + user)
    let q = Usuario.find({login : user })

    q.exec( (e, ret) => {
        //db.disconnect()
        fnCallback(ret)
    })
}

exports.verificar = (id, fnCallback) => {
    db.connect()

    Usuario.findById(id, (e, ret) => {
        fnCallback(ret != null)
    })
}


