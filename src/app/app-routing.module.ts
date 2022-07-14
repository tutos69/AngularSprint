import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ProductoComponent } from './Componentes/producto/producto.component';
import { RegistrarseComponent } from './Componentes/registrarse/registrarse.component';
import { SucursalesComponent } from './Componentes/sucursales/sucursales.component';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';

const routes: Routes = [
  {path: '', component:UsuarioComponent},
  {path: 'registrarse', component:RegistrarseComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'productos/:nombreClave', component:ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
