import { Component, OnInit, ViewChild } from '@angular/core';
import { ListCarritoService } from 'src/app/Servicio/ListCarrito/list-carrito.service';

@Component({
  selector: 'app-carrito-detalle',
  templateUrl: './carrito-detalle.component.html',
  styleUrls: ['./carrito-detalle.component.css']
})
export class CarritoDetalleComponent implements OnInit {
  public carritoLista: any = [];
  public carritoListaSuma: any = [];
  usuarios: any = "";
  constructor(private listaCarrito: ListCarritoService) { }



  ngOnInit(): void {
    this.usuarios = sessionStorage.getItem("Usuario");
    this.listaCarritoProductos(this.usuarios)
  }

  


  public listaCarritoProductos(usu: String) {
    this.listaCarrito.ListarCarrito(`http://localhost:8080/carrito/listarCarrito/${usu}`).subscribe(
      data => {
        console.log(data);
        this.carritoLista = data;   
        
      }, error => alert("Error"))
  }

}
