import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ListaProductoComponent } from 'src/app/Componentes/lista-producto/lista-producto.component';
import { ProductoComponent } from 'src/app/Componentes/producto/producto.component';
import { SucursalesComponent } from 'src/app/Componentes/sucursales/sucursales.component';
import { PagoComponent } from 'src/app/Componentes/pago/pago.component';
import { UsuarioComponent } from 'src/app/Componentes/usuario/usuario.component';
import { DashboardComponent } from './dashboard.component';
import { ListaPagosComponent } from 'src/app/Componentes/lista-pagos/lista-pagos.component';
import { CarritoDetalleComponent } from 'src/app/Componentes/carrito-detalle/carrito-detalle.component';
import { PedidoActualComponent } from 'src/app/Componentes/pedido-actual/pedido-actual.component';
import { ListarPedidoComponent } from 'src/app/Componentes/listar-pedido/listar-pedido.component';
import { InicioComponent } from 'src/app/Componentes/inicio/inicio.component';


const routes: Routes = [
  {path: '', component:DashboardComponent, children: [
    { path: '', component:InicioComponent },
    { path: 'usuario', component:UsuarioComponent  },
    { path: 'pedido', component:PedidoActualComponent},
    { path: 'listPedido', component:ListarPedidoComponent},
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
