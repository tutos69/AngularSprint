import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private ruta: Router) { }

  ngOnInit(): void {
  }

  public Salir(){
    sessionStorage.getItem('Usuario');
    sessionStorage.removeItem('Usuario');
    localStorage.removeItem("Latitude");
    localStorage.removeItem("Logitud");
   this.ruta.navigate(['/login']);
  }

}
