import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductoComponent } from "../producto/producto.component";
import { CarritoDetalleService} from 'src/app/Servicio/CarritoDetalle/carrito-detalle.service';
@Component({
  selector: 'app-carrito-detalle',
  templateUrl: './carrito-detalle.component.html',
  styleUrls: ['./carrito-detalle.component.css']
})
export class CarritoDetalleComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
