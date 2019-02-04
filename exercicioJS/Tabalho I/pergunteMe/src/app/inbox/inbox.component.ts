import { Component, OnInit } from '@angular/core';
import { Pergunta } from '../model/model';
import { PerguntaService } from '../services/pergunta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  perguntas : Pergunta[]

  constructor( private ps : PerguntaService,
               private router: Router) { }

  ngOnInit() {
    this.listar()
  }

  listar() {
    this.ps.listar('',(ret) => {
        this.perguntas = ret 
    })
  }

  responder(id : string) {
    this.router.navigate(['restrito/responder'], {queryParams: {'rpergunta': id}})
  }

}
