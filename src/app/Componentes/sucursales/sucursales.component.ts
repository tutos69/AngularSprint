import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  @Input() datosEntrantes: any;

  constructor() { }

  ngOnInit(): void {
   
  }



}
