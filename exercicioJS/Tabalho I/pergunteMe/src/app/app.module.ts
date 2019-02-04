import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes, Router, NavigationStart } from "@angular/router";
import { AppComponent } from './app.component';
import { MinhasPerguntasComponent } from './minhasPerguntas/minhasPerguntas.component';
import { PerguntaService } from './services/pergunta.service';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import { UsuarioService } from './services/usuario.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';
import { InboxComponent } from './inbox/inbox.component';
import { EnviaPerguntaComponent } from './envia-pergunta/envia-pergunta.component';
import { ResponderComponent } from './responder/responder.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { TimelineComponent } from './timeline/timeline.component';



const rotas : Routes = [
    { path : 'login', component : LoginComponent},
    { path : 'registroUsuario', component : CadUsuarioComponent},
    { path : 'restrito/meuPerfil', component : MeuPerfilComponent},
      { path : 'restrito/minhasPerguntas', component : MinhasPerguntasComponent},
      { path : 'restrito/profile/:login', component : TimelineComponent},
      {path : 'restrito/fazerPerguntas', component : EnviaPerguntaComponent},
      { path : 'restrito/responder', component : ResponderComponent},
      { path : 'restrito/inbox', component : InboxComponent},
      { path : 'sair', component : LoginComponent},



    { path : '', pathMatch: 'full', redirectTo : '/login'}
]

@NgModule({
  declarations: [
    AppComponent,
    MinhasPerguntasComponent,
    CadUsuarioComponent,
    LoginComponent,
    InboxComponent,
    EnviaPerguntaComponent,
    ResponderComponent,
    MeuPerfilComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotas),
    FormsModule,
    HttpClientModule
  ],
  providers: [
      PerguntaService,
      UsuarioService,
      AuthService,
      HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

    constructor(private router : Router, 
                private auth : AuthService) {
      this.definirNavListener()
    }

    definirNavListener() {
      this.router.events.subscribe( e => {

      if (e instanceof NavigationStart) {

          if (e.url.startsWith('/restrito/') && this.auth.usuario == null) {
              this.router.navigateByUrl('/login')
          } else if ( (e.url == '/' || e.url == '/login') 
                  && this.auth.usuario != null){
              this.router.navigateByUrl('/restrito/inbox')
          }
      }
      })
    }

   

 }
