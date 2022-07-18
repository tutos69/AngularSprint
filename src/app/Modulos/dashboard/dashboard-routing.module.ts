import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Usuario } from 'src/app/Clases/Usuario/usuario';

import { ListaProductoComponent } from 'src/app/Componentes/lista-producto/lista-producto.component';
import { ProductoComponent } from 'src/app/Componentes/producto/producto.component';
import { PruebaComponent } from 'src/app/Componentes/prueba/prueba.component';
import { SucursalesComponent } from 'src/app/Componentes/sucursales/sucursales.component';
import { PagoComponent } from 'src/app/Componentes/pago/pago.component';
import { UsuarioComponent } from 'src/app/Componentes/usuario/usuario.component';
import { DashboardComponent } from './dashboard.component';
import { ListaPagosComponent } from 'src/app/Componentes/lista-pagos/lista-pagos.component';
import { CarritoDetalleComponent } from 'src/app/Componentes/carrito-detalle/carrito-detalle.component';

const routes: Routes = [
  {path: '', component:DashboardComponent, children: [
    { path: '', component:UsuarioComponent  },
    { path: 'sucursales', component:SucursalesComponent},
    { path: 'pago', component:PagoComponent},
    { path: 'listPago', component:ListaPagosComponent},
    { path: 'carritosDetalles', component:CarritoDetalleComponent},
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
