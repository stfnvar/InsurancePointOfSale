import { TestBed, inject } from '@angular/core/testing';

import { TipOsiguranjaService } from './tip-osiguranja.service';

describe('TipOsiguranjaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipOsiguranjaService]
    });
  });

  it('should be created', inject([TipOsiguranjaService], (service: TipOsiguranjaService) => {
    expect(service).toBeTruthy();
  }));
});
