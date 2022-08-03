import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pago } from 'src/app/Clases/Pago/pago';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  constructor(private httpClient: HttpClient) { }
  
  crearPago(pagos:Pago,link:string): Observable<object>{
    return this.httpClient.post(link+"formaPago/create1",pagos);
  }
  
}
