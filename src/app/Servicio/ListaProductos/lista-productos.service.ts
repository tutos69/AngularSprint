import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
