import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  public useLocation?: [number, number];

  get isUserLocationReady(): boolean {
    return !!this.useLocation;
  }

  constructor() { }

  public async getUserLocation():Promise<[number, number]> {
    return new Promise((resolve, reject) =>{
      navigator.geolocation.getCurrentPosition(
        ({coords})=>{
          this.useLocation = [coords.latitude,coords.longitude];
          resolve(this.useLocation)
        }, (error) => {alert("No se pudo Obtener la geolocalizacion")
        console.log(error);
        reject();}
      )
    })
  }
}
