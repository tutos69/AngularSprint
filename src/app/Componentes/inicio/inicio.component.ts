import { Component, OnInit } from '@angular/core';
import { ScripService } from 'src/app/Servicio/Scrip/scrip.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private scrip:ScripService) {
    scrip.cargarScrip(["mensaje"])
   }

  ngOnInit(): void {
  }
  


}
