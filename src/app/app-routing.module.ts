import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarseComponent } from './Componentes/registrarse/registrarse.component';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';

const routes: Routes = [
  {path: '', component:UsuarioComponent},
  {path: 'registrarse', component:RegistrarseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
