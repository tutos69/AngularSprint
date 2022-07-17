import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { SucursalesComponent } from 'src/app/Componentes/sucursales/sucursales.component';

import { ProductoComponent } from 'src/app/Componentes/producto/producto.component';
import { ListaProductoComponent } from 'src/app/Componentes/lista-producto/lista-producto.component';
import { MenuComponent } from 'src/app/Componentes/menu/menu.component';
import { PruebaComponent } from 'src/app/Componentes/prueba/prueba.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SucursalesComponent,
   
    ProductoComponent,
    ListaProductoComponent,
    MenuComponent,
    PruebaComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule, 
    SharedModule
  ]
})
export class DashboardModule { }
