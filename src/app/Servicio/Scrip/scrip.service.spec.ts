import { TestBed } from '@angular/core/testing';

import { ScripService } from './scrip.service';

describe('ScripService', () => {
  let service: ScripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
