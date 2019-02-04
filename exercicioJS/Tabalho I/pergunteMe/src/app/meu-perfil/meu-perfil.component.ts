import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../model/model';
import { Md5 } from "ts-md5";
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent implements OnInit {

  usuario = new Usuario()
 

  constructor(private router : Router,
    private au : UsuarioService,
    private auth : AuthService) { }

  ngOnInit() {
    this.usuario = this.auth.usuario
    this.usuario.senha = ''
  }

  
  selecionar($event){
    let f = $event.target.files[0]
    let fr = new FileReader()
    fr.readAsDataURL(f);
  }


  salvar() {
    if(this.usuario.email == null ||
       this.usuario.login == null ||
       this.usuario.login == ''   ||
      this.usuario.senha  == null ||
      this.usuario.senha.trim()  == ''){
      alert('Email, Login ou Senha invalida!! Cadastro Abortado!.')
      this.cancelar()
      return
    } 

    this.usuario.senha = Md5.hashStr(this.usuario.senha) as string

    let fd = new FormData()
    fd.append('usuario', JSON.stringify(this.usuario))
    this.au.salvarAlter(fd)    
  }

  cancelar(){
    this.router.navigateByUrl('/')
  }

}
