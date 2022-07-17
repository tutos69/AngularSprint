import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private httpClient: HttpClient) { }
  listSucursales(url: string){
    return this.httpClient.get(url);
  }
}
