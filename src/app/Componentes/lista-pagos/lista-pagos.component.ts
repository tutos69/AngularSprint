import { Component, OnInit } from '@angular/core';
import { ListaPagoService } from 'src/app/Servicio/ListaPagos/lista-pago.services';

@Component({
  selector: 'app-lista-pagos',
  templateUrl: './lista-pagos.component.html',
  styleUrls: ['./lista-pagos.component.css']
})
export class ListaPagosComponent implements OnInit {

  constructor(private listPago:ListaPagoService) { }

  public listaPagos: any = [];
  public usu: any ="";
  ngOnInit(): void {
    this.usu = sessionStorage.getItem("Usuario");
    console.log(this.usu);
    this.pagosLista(this.usu);
  }
  public pagosLista(usuario: string){
    this.listPago.ListaPago(`http://localhost:8080/formasDePago/${usuario}`).subscribe(
      data => {
        this.listaPagos = data;
        console.log(this.listaPagos);
      },error=>alert("No valesd"))
  }

}
