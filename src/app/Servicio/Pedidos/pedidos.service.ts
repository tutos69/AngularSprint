import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/Clases/Usuario/usuario';
import { CancelarPedido } from 'src/app/Clases/CancelarPedido/cancelar-pedido';

@Injectable({
    providedIn: 'root'
  })
  export class PedidosService {
  
    constructor(private httpClient: HttpClient) { }
    
    listPedidosActual(url: string){
      return this.httpClient.get(url);
    }
    ListasPedidos(url: string){
      return this.httpClient.get(url);
    }
    cancelarPedido(url: string,usuario: CancelarPedido){
      return this.httpClient.put(url,usuario);
    }
    
  }