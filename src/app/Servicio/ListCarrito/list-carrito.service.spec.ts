import { TestBed } from '@angular/core/testing';

import { ListCarritoService } from './list-carrito.service';

describe('ListCarritoService', () => {
  let service: ListCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
