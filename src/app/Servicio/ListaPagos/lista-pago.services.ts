import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaPagoService {

  constructor(private httpClient: HttpClient) { }
  ListaPago(url: string) {
    return this.httpClient.get(url);
  }
  enviarPedido(url: string) {
    return this.httpClient.get(url);
  }
}
