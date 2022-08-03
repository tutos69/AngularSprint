import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarseComponent } from './Componentes/registrarse/registrarse.component';
import { UsuarioComponent } from './Componentes/Login/usuario.component';
import { Error404Component } from './Componentes/error404/error404.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component:UsuarioComponent},
  {path: 'registrarse', component:RegistrarseComponent},
  {path: 'FS', loadChildren:() => import('./Modulos/dashboard/dashboard.module').then(x=>x.DashboardModule)},
  {path: '**', component:Error404Component, pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
