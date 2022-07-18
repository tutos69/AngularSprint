import { TestBed } from '@angular/core/testing';

import { ListaPagoService } from './lista-pago.services';

describe('ListaPagoService', () => {
  let service: ListaPagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});