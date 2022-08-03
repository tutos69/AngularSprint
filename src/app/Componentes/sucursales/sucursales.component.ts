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
  link: any = "";
  ngOnInit(): void {
    this.link= sessionStorage.getItem("Link");
    this.cargarListaSucursales(this.link);
    
  }

  public cargarListaSucursales(link:string){
    this._sucursalesService.listSucursales(link+"sucursales").subscribe(
      data => {
        this.lisSucursales=data;
      },)
  }

}
