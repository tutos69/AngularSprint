import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarritoDetalle } from 'src/app/Clases/CarritoDetalle/carritoDetalle';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private httpClient: HttpClient) { }

  ListaProductos(url: string){
    return this.httpClient.get(url);
  }
  ListaCategorias(url: string){
    return this.httpClient.get(url);
  }

  agregarCarrito(carrito:CarritoDetalle):Observable<object>{
    return this.httpClient.post("http://localhost:8080/carrito/agregarProducto1",carrito);
  }

}
