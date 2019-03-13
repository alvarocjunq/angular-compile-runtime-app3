import { TestBed } from '@angular/core/testing';

import { HomeCreditoService } from './home-credito.service';

describe('HomeCreditoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeCreditoService = TestBed.get(HomeCreditoService);
    expect(service).toBeTruthy();
  });
});
