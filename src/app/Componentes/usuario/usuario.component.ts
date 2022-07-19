import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Servicio/Usuario/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private _usu:UsuarioService, private ruta: Router) { }
  public Usuarios:any = [];  
  public usu: any ="";
  ngOnInit(): void {
   this.usu = sessionStorage.getItem("Usuario");
   this.BuscarUsuarios(this.usu);
  }

  public BuscarUsuarios(usuari:String){
    this._usu.BuscarUsuario(`http://localhost:8080/usuario/${usuari}`).subscribe(
      data => {
        this.Usuarios=data;
      },)
  }

  public comprar(){
    this.ruta.navigate(['FS/sucursales']);
  }
  public MisPedidos(){
    this.ruta.navigate(['FS/listPedido']);
  }

}
