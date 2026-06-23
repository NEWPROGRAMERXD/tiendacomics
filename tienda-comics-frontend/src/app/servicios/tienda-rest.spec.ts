import { TestBed } from '@angular/core/testing';

import { TiendaRest } from './tienda-rest';

describe('TiendaRest', () => {
  let service: TiendaRest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiendaRest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
