const dao = require('./dao/usuario.dao')
module.exports = (app) => {
    app.use((req, resp, next) => {
    if(req.url.startsWith('/restrito')) {
        let idUsuario = req.get('Authentication')
         if(idUsuario == null){
            resp.statusCode = 401
            resp.statusMessage = 'Não autorizado'
            resp.end()
        }
        else {
            dao.verificar(idUsuario, (ret) =>{
                if(ret){
                    next()
                }
                else{
                    resp.statusCode = 401
                    resp.statusMessage = 'Não autorizado'
                    resp.end()
                }
            })
        }
    }else{
        next()
    }
    })
}