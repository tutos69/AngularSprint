import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';
import { RegistrarseComponent } from './Componentes/registrarse/registrarse.component';
import { SucursalesComponent } from './Componentes/sucursales/sucursales.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ProductoComponent } from './Componentes/producto/producto.component';
import { ListaProductoComponent } from './Componentes/lista-producto/lista-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    RegistrarseComponent,
    SucursalesComponent,
    InicioComponent,
    ProductoComponent,
    ListaProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
