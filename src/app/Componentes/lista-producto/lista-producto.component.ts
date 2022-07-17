import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route:ActivatedRoute, private listCatProd:ListaProductosService) { }

  ngOnInit(): void {
    this.cargarCategorias();
    this.route.paramMap.subscribe((paramsMAP:any) => { 
      const {params} = paramsMAP;
      this.nombreSucursal=params.nombreClave;
      this.cargarProductoCategoria(params.nombreClave,params.nombre);
    });
  

  }

  public cargarProductoCategoria(sucursal:String,nombre:String) {
    this.listCatProd.ListaProductosCategorias(`http://localhost:8080/producto/categoria/${sucursal}/${nombre}`).subscribe(
      data => {
        this.categoriaProductos = data;

      },error => alert("fsdfs"))
  }

  public cargarCategorias() {
    this.listCatProd.ListaCategorias(`http://localhost:8080/categoria`).subscribe(
      data => {
        this.listaCategoria = data;

      })
  }

}
