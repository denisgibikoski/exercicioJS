import { Injectable } from "@angular/core";
import { Pergunta } from "../model/model";
import { AuthService } from "./auth.service";
import { HttpService } from "./http.service";

const WS_SALVAR = "http://localhost:3000/restrito/pergunta/salvar"
const WS_LISTAR = "http://localhost:3000/restrito/pergunta/listar"
const WS_LISTAR_PERG = "http://localhost:3000/restrito/pergunta/listarPergunta"
const WS_RESPONDER = "http://localhost:3000/restrito/pergunta/responder"
const WS_LISTARESPONDIDAS = "http://localhost:3000/restrito/pergunta/listaRespondidas"
const WS_LISTARECEBIDAS = "http://localhost:3000/restrito/pergunta/listaRecebidas"

@Injectable()
export class PerguntaService {

    constructor( private http2: HttpService,
                 private auth : AuthService) {
    }

    salvar(perg : Pergunta, cb : () => void) {

        if(perg._id == null){
           perg.remetente = this.auth.usuario
           this.http2.post(WS_SALVAR,perg,cb)
         
        }
        else {
            this.http2.post(WS_RESPONDER, perg,cb) 
        
        }        
    }

   
    listar(tipo, cb : (ret : any) => void) {  
        if(tipo == 'respondidas')
           this.http2.post(WS_LISTARESPONDIDAS, this.auth.usuario, cb)
        else {
        this.http2.post(WS_LISTAR, this.auth.usuario, cb)
        } 
    }

    listarProfile(user , cb : (ret : any) => void) {     
        this.http2.post(WS_LISTARECEBIDAS, user, cb)           
    }


    listarPergunta(perg, cb : (ret : any) => void) {
        this.http2.post(WS_LISTAR_PERG, perg, cb)
     
    }
 


}