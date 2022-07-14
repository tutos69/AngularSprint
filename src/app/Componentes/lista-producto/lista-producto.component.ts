import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  @Input() datosEntrantesProductos: any;

  constructor() { }

  ngOnInit(): void {
  }

}
