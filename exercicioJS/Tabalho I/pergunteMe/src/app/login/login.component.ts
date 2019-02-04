import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/model';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { AuthService } from '../services/auth.service';
import { Md5 } from "ts-md5";


const WS_LOGIN = "http://localhost:3000/usuario/login"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario : Usuario = new Usuario()

  constructor(private http: HttpService,
              private auth : AuthService,
              private router : Router) { }

  ngOnInit() {
  }

    entrar() {
        this.usuario.senha = Md5.hashStr(this.usuario.senha) as string

        this.http.post(WS_LOGIN, this.usuario, (ret) => {
            if (ret != null) {
                this.auth.login(ret)
                this.router.navigateByUrl('/restrito/inbox')
            } else {
                this.usuario.senha = ''
                alert("Usuario ou Senha inválida !!")
            }
        })
    }

    sair(){
        console.log('Saindo do sistema')
        this.auth.logout()        
        this.router.navigateByUrl('/login')
      }

}
