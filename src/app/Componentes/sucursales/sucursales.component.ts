import { Component, OnInit } from '@angular/core';
import { Sucursales } from 'src/app/Clases/Sucursales/sucursales';
import { SucursalesService } from 'src/app/Servicio/Sucursales/sucursales.service';


@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  public lisSucursales:any = [];  
  constructor(private _sucursalesService: SucursalesService) { }

  ngOnInit(): void {
    this.cargarListaSucursales();
    
  }

  public cargarListaSucursales(){
    this._sucursalesService.listSucursales("http://localhost:8080/sucursales").subscribe(
      data => {
        this.lisSucursales=data;
      },)
  }

}
