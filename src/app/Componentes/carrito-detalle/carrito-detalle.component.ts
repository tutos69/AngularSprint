import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ListCarritoService } from 'src/app/Servicio/ListCarrito/list-carrito.service';

@Component({
  selector: 'app-carrito-detalle',
  templateUrl: './carrito-detalle.component.html',
  styleUrls: ['./carrito-detalle.component.css']
})
export class CarritoDetalleComponent implements OnInit {
  public carritoLista: any = [];
  public totals: any = [];
  usuarios: any = "";
  constructor(private listaCarrito: ListCarritoService,private ruta: Router) { }



  ngOnInit(): void {
    this.usuarios = sessionStorage.getItem("Usuario");
    this.listaCarritoProductos(this.usuarios)
    this.total(this.usuarios);
  }

  public total(usu: String) {
    this.listaCarrito.ListarCarrito(`http://localhost:8080/carrito/total/${usu}`).subscribe(
      data => {
        this.totals = data;   
        console.log(this.totals);
      }, error => alert("Error"))
  }


  public listaCarritoProductos(usu: String) {
    this.listaCarrito.ListarCarrito(`http://localhost:8080/carrito/listarCarrito/${usu}`).subscribe(
      data => {
        this.carritoLista = data;   
        console.log(this.carritoLista);
      }, error => alert("Error"))
  }


  public limCar(){
    this.usuarios = sessionStorage.getItem("Usuario");
    this.limpiarCarrito(this.usuarios);
  }


  public limpiarCarrito(urs: string) {
   
    this.listaCarrito.LimpiarCarrito(`http://localhost:8080/pedido/limpiarCarrito/${urs}`).subscribe(
      data => {
        alert("Carrito Limpio")
        this.ruta.navigate(['FS'])
      }, error => alert("Error"))
  }
}
