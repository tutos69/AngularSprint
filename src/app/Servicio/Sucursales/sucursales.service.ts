import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  constructor(private httpClient: HttpClient) { }
  
  listSucursales(url: string){
    return this.httpClient.get(url);
  }

}
