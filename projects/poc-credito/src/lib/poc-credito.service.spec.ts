import { TestBed } from '@angular/core/testing';

import { PocCreditoService } from './poc-credito.service';

describe('PocCreditoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PocCreditoService = TestBed.get(PocCreditoService);
    expect(service).toBeTruthy();
  });
});
