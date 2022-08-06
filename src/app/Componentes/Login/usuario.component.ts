import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Clases/Usuario/usuario';
import { LoginService } from 'src/app/Servicio/Login/login.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  link: any = "";
  user: Usuario = new Usuario();
 
  constructor(private usuarioService: LoginService, private ruta: Router) { }

  ngOnInit(): void {
   
    this.link = "https://famasama.azurewebsites.net/Sistema_Farmacia_S-0.0.1-SNAPSHOT/";
    sessionStorage.setItem("Link",this.link);
  }


  usuarioIniciar() {
    console.log(this.user)
    this.usuarioService.login(this.user,this.link).subscribe(
      data => {
        
        sessionStorage.setItem("Usuario",this.user.usuario);
        alert("Bienvenido")
        
        this.ruta.navigate(['FS'])
      }, error => alert("Esta Mal el Usuario o Contraseña"))
  }

 
}
