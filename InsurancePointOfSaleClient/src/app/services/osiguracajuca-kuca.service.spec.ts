import { TestBed, inject } from '@angular/core/testing';

import { OsiguracajucaKucaService } from './osiguracajuca-kuca.service';

describe('OsiguracajucaKucaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OsiguracajucaKucaService]
    });
  });

  it('should be created', inject([OsiguracajucaKucaService], (service: OsiguracajucaKucaService) => {
    expect(service).toBeTruthy();
  }));
});
