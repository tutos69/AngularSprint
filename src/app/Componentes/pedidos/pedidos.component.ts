import { Component, OnInit } from '@angular/core';
import {PedidosService} from 'src/app/Servicio/Pedidos/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  public lisPedidos:any = [];
  constructor(private _pedidosService: PedidosService) { }
   
    ngOnInit(): void {
      this.cargarListaPedidos();
    }
  public cargarListaPedidos(){
    this._pedidosService.listPedidos("http://localhost:8080/pedidos").subscribe(
      data => {
        this.lisPedidos=data;
      },)
  }

}
