import { Component, OnInit } from '@angular/core';
import { PerguntaService } from '../services/pergunta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pergunta } from '../model/model';


@Component({
  selector: 'app-responder',
  templateUrl: './responder.component.html',
  styleUrls: ['./responder.component.css']
})
export class ResponderComponent implements OnInit {

  pergunta = new Pergunta ()

  constructor( private ps : PerguntaService,
               private route :  ActivatedRoute,
               private router : Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe( (params : any) =>{
      this.pergunta._id = params['rpergunta'];

      this.buscaPergunta()
    })
  }

  buscaPergunta(){
      this.ps.listarPergunta(this.pergunta, (ret) => {
      this.pergunta = ret[0]   
      })
  }

  cancelar(){
    this.router.navigateByUrl('/restrito/inbox')
  }

  salvar(p){
    this.ps.salvar(p,
      () => {
          this.router.navigateByUrl('/restrito/inbox')
      })
  }




}
