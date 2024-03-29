import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarritoDetalle } from 'src/app/Clases/CarritoDetalle/carritoDetalle';

@Injectable({
  providedIn: 'root'
})
export class ListaProductosService {

  constructor(private httpClient: HttpClient) {}
  ListaProductosCategorias(url: string){
    return this.httpClient.get(url);
  }
  ListaCategorias(url: string){
    return this.httpClient.get(url);
  }
  agregarCarrito(carrito:CarritoDetalle,link:String):Observable<object>{
    return this.httpClient.post(link+"carrito/agregarProducto1",carrito);
  }
}
