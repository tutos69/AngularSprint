import { Component, OnInit } from '@angular/core';
import { SucursalesService } from 'src/app/Servicio/Sucursales/sucursales.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public lisSucursales:any = [];  

  constructor(private listaSucursales: SucursalesService) { }

  ngOnInit(): void {
    this.cargarListaSucursales();
  }


  public cargarListaSucursales(){
    this.listaSucursales.listSucursales("http://localhost:8080/sucursales").subscribe(
      data => {
        this.lisSucursales=data;
  
      },)
  }

}
