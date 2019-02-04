import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/model';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Md5 } from "ts-md5";


@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.css']
})
export class CadUsuarioComponent implements OnInit {

  usuario = new Usuario()

  constructor(private router : Router,
              private route : ActivatedRoute,
              private au : UsuarioService
    ) { }

    public conteudoImg 

 
  ngOnInit() {

  } 

  salvar() {

    this.usuario.senha = Md5.hashStr(this.usuario.senha) as string

    let fd = new FormData()
    fd.append('usuario', JSON.stringify(this.usuario))
    
    this.au.salvarInc(fd)
  }

  cancelar(){
     this.router.navigateByUrl('/login')
  }

  selecionar($event){
    let f = $event.target.files[0]
    let fr = new FileReader()

    fr.onloadend = (e) =>{
      this.conteudoImg = fr.result
    }

    fr.readAsDataURL(f);
  }

}
