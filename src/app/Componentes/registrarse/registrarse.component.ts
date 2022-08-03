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
  link: any = "";
  registro:Registrarse = new Registrarse();
  constructor(private router:Router,   private registrarse:RegistrarseService) { }

  ngOnInit(): void {
    this.link= sessionStorage.getItem("Link");
  }

  crearUsuario(){
    this.registrarse.crearUsu(this.registro,this.link).subscribe(
      data => {
        alert("Se creo Una Cuenta")
      }, error => alert("Su cedula no existe, Primero registrece en una de nuestras farmacias"))
  }
}
