const dao = require('../dao/usuario.dao')
const multer = require('multer')
const fs = require('fs')
const Usuario = require('../models/usuario.model')

mostraMsg = false

module.exports = (app) => {

    app.route('/restrito/usuario/listar').get( (req, res) => {
        dao.listar( (ret) => {
            res.json(ret)
        })
    })

    app.route('/usuario/salvarInclusao').post( multer().none(), (req, res) => {
        let imagem  = req.body.imagem.split(';base64,').pop()
        let dados   = JSON.parse(req.body.usuario)

        if (mostraMsg)
           console.log('é inclusao' ) 

        dao.validarCadastro(dados, (resp) => {
            if (mostraMsg)
               console.log('retorno valida CADASTRO  ' + resp)

            if (resp == null) {
                if (mostraMsg)
                   console.log('Salvando CADASTRO WS')

                let u = new Usuario(dados);
                
                fs.writeFile('./upload/img_' + u.login + '.jpg', imagem, {encoding:'base64'},(e) =>{
                    res.end()
                })
                dados.foto = '/upload/img_' + u.login + '.jpg';
                    
                dao.salvarInc(dados, () => {
                    res.end()
                })
            }
            else res.status(412).send("email ou login ja registrado em outro cadastro!!")   
        })
        
    })
    

    app.route('/restrito/usuario/salvarAlter').post( multer().none(), (req, res) => {

        let imagem  = req.body.imagem.split(';base64,').pop()
        let dados   = JSON.parse(req.body.usuario)

        if (mostraMsg)
            console.log('é alteracao' ) 

        let u = new Usuario(dados);    

        fs.writeFile('./upload/img_' + u.login + '.jpg', imagem, {encoding:'base64'},(e) =>{
            res.end()
        })
        
         dados.foto = '/upload/img_' + u.login + '.jpg';
        
        dao.salvarAlter(dados, () => {
            res.end()
        })
    })

    app.route('/usuario/login').post( (req, resp) => {
        let usuario = req.body

        if (mostraMsg)
           console.log('veio fazer login ' + usuario.senha)

        dao.consultar(req.body, (result) => {
            if (mostraMsg)
            console.log('retorno LOGIN ' + result)
           resp.json(result)
        })
    })

    app.route('/upload/:img').get( (req, res) => {
 
        let imagem = './upload/' + req.params.img

        if (mostraMsg)
           console.log('Carregando Imagem: ' + imagem)    
                      
        fs.readFile(imagem,(err, data)=>{
            if (err) {
                console.log('ERRO: ' + err)
            }
            res.writeHead(200,{'responseType': 'image/jpeg'})
            res.end(data); 
        })    
    })

}