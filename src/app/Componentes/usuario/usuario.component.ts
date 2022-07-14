import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Clases/Usuario/usuario';
import { LoginService } from 'src/app/Servicio/Usuario/login.service';

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
        alert("Iniciaste Sesion")
      }, error => alert("Esta Mal el Usuario o Contraseña"))
  }

 
}
