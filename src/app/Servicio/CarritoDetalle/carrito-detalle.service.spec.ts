import { TestBed } from '@angular/core/testing';

import { CarritoDetalleService } from './carrito-detalle.service';

describe('CarritoDetalleService', () => {
  let service: CarritoDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
