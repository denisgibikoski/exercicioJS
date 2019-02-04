import { Component, OnInit } from '@angular/core';
import { Pergunta, Usuario } from '../model/model';
import { PerguntaService } from '../services/pergunta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  perguntas : Pergunta[]

  login : string

  pathServer    = 'http://localhost:3000'
  caminhoImagem 

  usuario = new Usuario()
    
    constructor(private ps : PerguntaService,
                private route :  ActivatedRoute,
                private router : Router
                ) {
    }

  ngOnInit() {
    this.usuario.login = this.route.snapshot.params['login'];
    this.listar()  
  }

  listar() {
    this.ps.listarProfile(this.usuario, (ret) => {
        this.perguntas = ret 

        if(this.perguntas[0] == null){
           alert('O usuario ' + this.usuario.login + ' ainda nao respondeu!')
           this.router.navigateByUrl('/login') 
        }
        this.usuario = this.perguntas[0].destinatario  
        
        this.caminhoImagem = this.pathServer + this.usuario.foto
    })
  }

  carregarEsse(usLogin){
    this.usuario.login = usLogin
    this.listar()
  }

}
