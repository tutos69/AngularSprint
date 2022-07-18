import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarritoDetalle } from 'src/app/Clases/CarritoDetalle/carritoDetalle';

@Injectable({
  providedIn: 'root'
})
export class CarritoDetalleService {

  constructor(private httpClient: HttpClient) {}

  crearDetalle(detalles:CarritoDetalle): Observable<object> {
    return this.httpClient.post("http://localhost:8080/carrito/agregarProducto",detalles);
}
}
