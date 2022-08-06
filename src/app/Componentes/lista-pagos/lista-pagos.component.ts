import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaPagoService } from 'src/app/Servicio/ListaPagos/lista-pago.services';

@Component({
  selector: 'app-lista-pagos',
  templateUrl: './lista-pagos.component.html',
  styleUrls: ['./lista-pagos.component.css']
})
export class ListaPagosComponent implements OnInit {

  constructor(private listPago:ListaPagoService,private ruta: Router) { }

  public listaPagos: any = [];
  public usu: any ="";
  public lon: any ="";
  public lat: any ="";
  link: any = "";
  ngOnInit(): void {
    this.usu = sessionStorage.getItem("Usuario");
    this.link= sessionStorage.getItem("Link");
    this.pagosLista(this.usu,this.link);
  }
  public pagosLista(usuario: string,link:string){
    this.listPago.ListaPago(`${link}formasDePago/${usuario}`).subscribe(
      data => {
        this.listaPagos = data;
        
      },error=>alert("No valesd"))
  }

  public atras(){
    this.ruta.navigate(['FS/carritosDetalles'])
  }

  public siguiente(){
    this.usu = sessionStorage.getItem("Usuario");
    this.lat = localStorage.getItem("Latitude");
    this.lon = localStorage.getItem("Logitud");
    this.link= sessionStorage.getItem("Link");
    console.log(this.lat) 
    this.envirarPedido(this.usu,this.lon,this.lat ,this.link);
  }

 

  public envirarPedido(usuario: string,long:number,lat:number,link:string){
    this.listPago.ListaPago(`${link}pedido/enviar/${usuario}/${long}/${lat}`).subscribe(
      data => {
      
        this.ruta.navigate(['FS/pedido'])
      },error=>alert("Pedido Creado"))
   
  }
}
