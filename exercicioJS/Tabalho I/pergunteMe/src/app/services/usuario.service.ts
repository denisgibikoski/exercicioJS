import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Router } from "@angular/router";

const WS_SALVAR_INC = "http://localhost:3000/usuario/salvarInclusao"
const WS_SALVAR_AlTER = "http://localhost:3000/restrito/usuario/salvarAlter"
const WS_LISTAR = "http://localhost:3000/restrito/usuario/listar"

@Injectable()
export class UsuarioService {

    constructor( private http2 : HttpService, 
                private router: Router) {  
    }

    salvarAlter(fd : FormData){

        this.http2.post(WS_SALVAR_AlTER, fd, (ret) => {
            if (ret != null) {
                alert('ERRO ao salvar Cadastro. ' + ret)
            } else {
                alert("Cadastro salvo com sucesso!")
                this.router.navigateByUrl('/restrito/meuPerfil')               
            }
        })
    }

    salvarInc(fd : FormData){
        this.http2.post(WS_SALVAR_INC, fd, (ret) => {
            if (ret != null) {
                alert('ERRO ao salvar Cadastro. ' + ret)
            } else {
                alert("Cadastro incluido com sucesso!")
                this.router.navigateByUrl('/login')
            }
        })
    }

  
    listar(cb : (ret : any) => void) {
        this.http2.get(WS_LISTAR, cb)

    }

}