import { Component, OnInit } from '@angular/core';
import { Pergunta, Usuario } from '../model/model';
import { UsuarioService } from '../services/usuario.service';
import { PerguntaService } from '../services/pergunta.service';
import { Router } from '@angular/router';

const WS_ENV_PERG   = "http://localhost:3000/pergunta/enviar"


@Component({
  selector: 'app-envia-pergunta',
  templateUrl: './envia-pergunta.component.html',
  styleUrls: ['./envia-pergunta.component.css']
})
export class EnviaPerguntaComponent implements OnInit {

  pergunta = new Pergunta()
  usuarios : Usuario[]

  constructor(private us: UsuarioService,
              private ps: PerguntaService,
              private router: Router) {
    }

  ngOnInit() {
    this.buscaUsuarios()

  }

  buscaUsuarios() {
    this.us.listar( (ret) => {
       this.usuarios = ret
    })
  }

  salvar() {
    this.ps.salvar(this.pergunta,
        () => {
            this.router.navigateByUrl('/restrito/inbox')
        }
    )
  }

  cancelar(){
    this.router.navigateByUrl('/restrito/inbox')
  }

}
