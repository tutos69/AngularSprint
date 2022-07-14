import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/Servicio/Productos/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public lisProductos:any = [];
  constructor(private route:ActivatedRoute, private producto: ProductosService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramsMAP:any) => { 
      const {params} = paramsMAP;
      this.cargarListaSucursales(params.nombreClave)
    });
   
  }


  public cargarListaSucursales(nombre:String){
    this.producto.ListaProductos(`http://localhost:8080/producto/${nombre}`).subscribe(
      data => {
        this.lisProductos=data;
  
      },)
  }
}
