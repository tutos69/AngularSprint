import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/Servicio/Pedidos/pedidos.service';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})
export class ListarPedidoComponent implements OnInit {

  public todosPedidosa:any = [];
  public usu: any ="";
  link: any = "";
  constructor(private todoPedido: PedidosService) { }

  ngOnInit(): void {
    this.usu = sessionStorage.getItem("Usuario");
    this.link= sessionStorage.getItem("Link");
    this.todosPedidos(this.usu,this.link)
  }


  public todosPedidos(usu:String,link:string) {
    this.todoPedido.ListasPedidos(`${link}pedidos/${usu}`).subscribe(
      data => {
        this.todosPedidosa = data;
      },error => alert("No vale"))
  }
}
