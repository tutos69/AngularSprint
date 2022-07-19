import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CancelarPedido } from 'src/app/Clases/CancelarPedido/cancelar-pedido';
import { Usuario } from 'src/app/Clases/Usuario/usuario';
import { PedidosService } from 'src/app/Servicio/Pedidos/pedidos.service';

@Component({
  selector: 'app-pedido-actual',
  templateUrl: './pedido-actual.component.html',
  styleUrls: ['./pedido-actual.component.css']
})
export class PedidoActualComponent implements OnInit {

  public pedidoActual:any;
  public usu: any ="";
  cUsuario:CancelarPedido = new CancelarPedido();
  constructor(private pedidoActualService: PedidosService,private ruta: Router) { }

  ngOnInit(): void {
    this.usu = sessionStorage.getItem("Usuario");
    this.pedidoActuals( this.usu)
  }

  public pedidoActuals(usu:String) {
    this.pedidoActualService.listPedidosActual(`http://localhost:8080/pedido/listarPedidoActual/${usu}`).subscribe(
      data => {
        this.pedidoActual = data;
       
      },error => alert("No vale"))
  }


public Cancelar(){
  this.usu = sessionStorage.getItem("Usuario");
  this.cUsuario.usuario=this.usu;
  this.CancelarPedido(this.cUsuario)  
}

  public CancelarPedido(usuario:CancelarPedido) {
    this.pedidoActualService.cancelarPedido(`http://localhost:8080/Producto/CancelarPedido/`,usuario).subscribe(
      data => {
        alert("Pedido Cancelado")
        this.ruta.navigate(['FS']);
      },error => alert("No vale"))
  }
}
