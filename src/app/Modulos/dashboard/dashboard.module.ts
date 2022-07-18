import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { SucursalesComponent } from 'src/app/Componentes/sucursales/sucursales.component';
import { PagoComponent } from 'src/app/Componentes/pago/pago.component';
import { ProductoComponent } from 'src/app/Componentes/producto/producto.component';
import { ListaProductoComponent } from 'src/app/Componentes/lista-producto/lista-producto.component';
import { MenuComponent } from 'src/app/Componentes/menu/menu.component';
import { PruebaComponent } from 'src/app/Componentes/prueba/prueba.component';
import { ListaPagosComponent } from 'src/app/Componentes/lista-pagos/lista-pagos.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SucursalesComponent,
    PagoComponent,
    ProductoComponent,
    ListaProductoComponent,
    MenuComponent,
    PruebaComponent,
    ListaPagosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule, 
    SharedModule
  ]
})
export class DashboardModule { }
