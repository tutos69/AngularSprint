import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaProductoComponent } from 'src/app/Componentes/lista-producto/lista-producto.component';
import { ProductoComponent } from 'src/app/Componentes/producto/producto.component';
import { PruebaComponent } from 'src/app/Componentes/prueba/prueba.component';
import { SucursalesComponent } from 'src/app/Componentes/sucursales/sucursales.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path: '', component:DashboardComponent, children: [
    { path: 'sucursales', component:SucursalesComponent},
    { path: 'products',children: [
      {path: ':nombreClave',component:ProductoComponent},
      {path: ':nombreClave/:nombre', component:ListaProductoComponent}
    ]},
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
