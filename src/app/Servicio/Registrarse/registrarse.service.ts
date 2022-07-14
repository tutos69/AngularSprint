import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registrarse } from 'src/app/Clases/Registrarse/registrarse';

@Injectable({
  providedIn: 'root'
})
export class RegistrarseService {

  constructor(private httpClient: HttpClient) { }

  crearUsu(registro:Registrarse):Observable<object>{
    return this.httpClient.post("http://localhost:8080/usuario/create",registro);
  }
}
