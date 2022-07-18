import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoDetalle } from 'src/app/Clases/CarritoDetalle/carritoDetalle';
import { ProductosService } from 'src/app/Servicio/Productos/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public lisProductos:any = [];
  public listaCategoria:any = [];
  public listaProductosCarrito:any = [];
  nombreSucursal:any = '';
  
  carrito:CarritoDetalle = new CarritoDetalle();
  nombre:String="";
  constructor(private route:ActivatedRoute, private producto: ProductosService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramsMAP:any) => { 
      const {params} = paramsMAP;
      this.nombreSucursal=params.nombreClave;
      this.cargarListaSucursales(params.nombreClave)
    });
   this.cargarCategorias();
  }

  public cargarListaSucursales(nombre:String){
    this.producto.ListaProductos(`http://localhost:8080/producto/${nombre}`).subscribe(
      data => {
        this.lisProductos=data;
  
      },)
  }

  public cargarCategorias() {
    this.producto.ListaCategorias(`http://localhost:8080/categoria`).subscribe(
      data => {
        this.listaCategoria = data;

      })
  }
  cargarProductos() {
   // this.producto.ListaCategorias(`http://localhost:8080/carrito/agregarProducto`).subscribe(
    //  data => {
       // this.listaProductosCarrito = data;
    console.log (this.carrito);
   //   })
  }

}
