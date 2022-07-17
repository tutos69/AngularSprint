import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuarioComponent } from './Componentes/Login/usuario.component';
import { RegistrarseComponent } from './Componentes/registrarse/registrarse.component';
import { SharedModule } from './Modulos/shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    RegistrarseComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
