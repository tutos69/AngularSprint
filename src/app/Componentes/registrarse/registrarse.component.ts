import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registrarse } from 'src/app/Clases/Registrarse/registrarse';
import { RegistrarseService } from 'src/app/Servicio/Registrarse/registrarse.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  registro:Registrarse = new Registrarse();
  constructor(private router:Router,   private registrarse:RegistrarseService) { }

  ngOnInit(): void {
  }

  crearUsuario(){
    this.registrarse.crearUsu(this.registro).subscribe(
      data => {
        alert("Se creo Una Cuenta")
      }, error => alert("Su cedula no existe, Primero registrece en una de nuestras farmacias"))
  }
}
