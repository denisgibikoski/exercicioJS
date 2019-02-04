import { Component, OnInit } from '@angular/core';
import { Pergunta, Usuario } from '../model/model';

import { Router } from '@angular/router';
import { PerguntaService } from '../services/pergunta.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './minhasPerguntas.component.html',
  styleUrls: ['./minhasPerguntas.component.css']
})
export class MinhasPerguntasComponent implements OnInit {

    perguntas : Pergunta[]
    
    constructor(private ps : PerguntaService,
                private router: Router
                ) {
    }

    
    cancelar() {
        this.router.navigateByUrl('/lista')
    }

  ngOnInit() {
    this.listar()
  }

  listar() {
    this.ps.listar('respondidas', (ret) => {
        this.perguntas = ret 
    })
  }

}
