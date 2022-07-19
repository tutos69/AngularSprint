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
  usuarios: any = "";
  nombre:String="";
 
  constructor(private route:ActivatedRoute, private productoService: ProductosService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramsMAP:any) => { 
      const {params} = paramsMAP;
      this.nombreSucursal=params.nombreClave;
      this.cargarListaSucursales(params.nombreClave)
    });
   this.cargarCategorias();
   this.usuarios = sessionStorage.getItem("Usuario");
  }

  public cargarListaSucursales(nombre:String){
    this.productoService.ListaProductos(`http://localhost:8080/producto/${nombre}`).subscribe(
      data => {
        this.lisProductos=data;
  
      },)
  }

  public cargarCategorias() {
    this.productoService.ListaCategorias(`http://localhost:8080/categoria`).subscribe(
      data => {
        this.listaCategoria = data;

      })
  }

  cargarProductos(Producto:any) {
    this.carrito.cantidad=1;
    this.carrito.usuario=this.usuarios;
    this.carrito.nombreProductoSucursal=Producto.producto.nombre;
    this.carrito.sucursal=Producto.sucursal.nombreClave
    this.productoService.agregarCarrito(this.carrito).subscribe(
      data => {
        console.log(data);
      }, error => alert("Datos para el pago mal ingresados"))
  }

}
