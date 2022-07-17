import { Component, OnInit } from '@angular/core';
import { PruebaService } from 'src/app/Servicio/Prueba/prueba.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  public lisSucursales:any = [];  
  constructor(private pruebaS: PruebaService) { }

  ngOnInit(): void {
    this.cargarListaSucursales();
  }

  public cargarListaSucursales(){
    this.pruebaS.listSucursales("http://localhost:8080/sucursales").subscribe(
      data => {
        this.lisSucursales=data;
      },)
  }

}
