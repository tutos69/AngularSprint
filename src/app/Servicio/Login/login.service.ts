import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Usuario } from 'src/app/Clases/Usuario/usuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private httpClient: HttpClient) {}
 



  login(usuario:Usuario,link:string):Observable<object>{
    
    return this.httpClient.post(link + "usuario/iniciarSesion",usuario);
  }
}
