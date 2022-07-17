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

  user: Usuario = new Usuario();
 
  constructor(private usuarioService: LoginService, private ruta: Router) { }

  ngOnInit(): void {
  }


  usuarioIniciar() {
    console.log(this.user)
    this.usuarioService.login(this.user).subscribe(
      data => {
        sessionStorage.setItem("Usuario",this.user.usuario);
        alert("Bienvenido")
        console.log(sessionStorage.getItem("Usuario"));
        this.ruta.navigate(['FS'])
      }, error => alert("Esta Mal el Usuario o Contraseña"))
  }

 
}
