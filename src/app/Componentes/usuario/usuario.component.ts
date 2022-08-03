import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Servicio/Usuario/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  link: any = "";
  constructor(private _usu:UsuarioService, private ruta: Router) { }
  public Usuarios:any = [];  
  public usu: any ="";
  ngOnInit(): void {
   this.usu = sessionStorage.getItem("Usuario");
   this.link= sessionStorage.getItem("Link");
   this.BuscarUsuarios(this.usu,this.link);
  
   
  }

  public BuscarUsuarios(usuari:String,link:string){
    this._usu.BuscarUsuario(`${link}usuario/${usuari}`).subscribe(
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
