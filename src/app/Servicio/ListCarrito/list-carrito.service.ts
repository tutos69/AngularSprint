import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListCarritoService {

  constructor(private httpClient: HttpClient) { }
  ListarCarrito(url: string){
    return this.httpClient.get(url);
  }
  LimpiarCarrito(url: string){
    return this.httpClient.get(url);
  }
  total(url: string){
    return this.httpClient.get(url);
  }
}
