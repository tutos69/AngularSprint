import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuarioComponent } from './Componentes/Login/usuario.component';
import { RegistrarseComponent } from './Componentes/registrarse/registrarse.component';
import { SharedModule } from './Modulos/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Error404Component } from './Componentes/error404/error404.component';




@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    RegistrarseComponent,
    Error404Component,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
