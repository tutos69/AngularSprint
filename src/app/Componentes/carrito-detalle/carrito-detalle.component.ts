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
  link: any = "";
  constructor(private listaCarrito: ListCarritoService,private ruta: Router) { }



  ngOnInit(): void {
    this.usuarios = sessionStorage.getItem("Usuario");
    this.link= sessionStorage.getItem("Link");
    this.listaCarritoProductos(this.usuarios,this.link)
    this.total(this.usuarios,this.link);
  }

  public total(usu: String,link:string) {
    this.listaCarrito.ListarCarrito(`${link}carrito/total/${usu}`).subscribe(
      data => {
        this.totals = data;   
        console.log(this.totals);
      },
       error => this.ruta.navigate(['**']))
  }


  public listaCarritoProductos(usu: String,link:string) {
    this.listaCarrito.ListarCarrito(`${link}carrito/listarCarrito/${usu}`).subscribe(
      data => {
        this.carritoLista = data;   
        console.log(this.carritoLista);
      }, error => this.ruta.navigate(['**']))
  }


  public limCar(){
    this.usuarios = sessionStorage.getItem("Usuario");
    this.link= sessionStorage.getItem("Link");
    this.limpiarCarrito(this.usuarios,this.link);
  }


  public limpiarCarrito(urs: string,link:string) {
   
    this.listaCarrito.LimpiarCarrito(`${link}pedido/limpiarCarrito/${urs}`).subscribe(
      data => {
        alert("Carrito Limpio")
        this.ruta.navigate(['FS'])
      }, error => this.ruta.navigate(['**']))
  }
}
