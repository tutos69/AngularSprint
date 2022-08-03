import { Component, OnInit } from '@angular/core';
import { Pago } from 'src/app/Clases/Pago/pago';
import { PagoService } from 'src/app/Servicio/Pago/pago.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  FormasPago = [
    'TARJETA_DEBITO',
    'TARJETA_CREDITO'
  ]
  tiposPago: String = '';
  usuarios: any = "";
  link: any = "";
  pagos: Pago = new Pago();
  constructor(private pago: PagoService) { }

  ngOnInit(): void {
    this.usuarios = sessionStorage.getItem("Usuario");
    this.link= sessionStorage.getItem("Link");
  }


  crearPago() {
    this.pagos.tipoPago = this.tiposPago;
    this.pagos.vuelto = 0;
    this.pagos.usuario = this.usuarios;
      this.pago.crearPago(this.pagos,this.link).subscribe(
        data => {
          alert("Pago creado")
        }, error => alert("Datos para el pago mal ingresados"))
  }

}
