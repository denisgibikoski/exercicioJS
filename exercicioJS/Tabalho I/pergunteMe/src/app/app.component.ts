import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Usuario } from './model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pergunte-me';

  constructor( private auth : AuthService,
               private router:Router) {
   
}

  sair(){
    this.auth.logout()
    this.router.navigateByUrl('/login')
  }
}
