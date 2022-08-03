import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoDetalle } from 'src/app/Clases/CarritoDetalle/carritoDetalle';
import { ListaProductosService } from 'src/app/Servicio/ListaProductos/lista-productos.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  public categoriaProductos: any = [];
  public listaCategoria: any = [];
  nombreSucursal:any = [];
  carrito:CarritoDetalle = new CarritoDetalle();
  usuarios: any = "";
  link: any = "";

  constructor(private route:ActivatedRoute, private listCatProd:ListaProductosService) { }

  ngOnInit(): void {
   
    this.link= sessionStorage.getItem("Link");
    this.cargarCategorias(this.link);
    this.route.paramMap.subscribe((paramsMAP:any) => { 
      const {params} = paramsMAP;
      this.nombreSucursal=params.nombreClave;
      this.cargarProductoCategoria(params.nombreClave,params.nombre,this.link);
      this.usuarios = sessionStorage.getItem("Usuario");
    });
  

  }

  public cargarProductoCategoria(sucursal:String,nombre:String,link:string) {
    this.listCatProd.ListaProductosCategorias(`${link}producto/categoria/${sucursal}/${nombre}`).subscribe(
      data => {
        this.categoriaProductos = data;

      },error => alert("fsdfs"))
  }

  public cargarCategorias(link:string) {
    this.listCatProd.ListaCategorias(`${link}categoria`).subscribe(
      data => {
        this.listaCategoria = data;

      })
  }

  cargarProductos(Producto:any) {
    this.carrito.cantidad=1;
    this.carrito.usuario=this.usuarios;
    this.carrito.nombreProductoSucursal=Producto.producto.nombre;
    this.carrito.sucursal=Producto.sucursal.nombreClave
    this.link= sessionStorage.getItem("Link");
    this.listCatProd.agregarCarrito(this.carrito,this.link).subscribe(
      data => {
        alert("Producto Agregado al Carrito")
      }, error => alert("Datos para el pago mal ingresados"))
  }

}
