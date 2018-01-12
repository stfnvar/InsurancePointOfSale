import { TestBed, inject } from '@angular/core/testing';

import { OsiguranjeService } from './osiguranje.service';

describe('OsiguranjeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OsiguranjeService]
    });
  });

  it('should be created', inject([OsiguranjeService], (service: OsiguranjeService) => {
    expect(service).toBeTruthy();
  }));
});
