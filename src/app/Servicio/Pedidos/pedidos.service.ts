import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class PedidosService {
  
    constructor(private httpClient: HttpClient) { }
    
    listPedidos(url: string){
      return this.httpClient.get(url);
    }
    
  }