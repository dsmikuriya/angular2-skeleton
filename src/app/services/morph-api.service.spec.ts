import { TestBed, inject } from '@angular/core/testing';

import { MorphApiService } from './morph-api.service';

describe('MorphApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MorphApiService]
    });
  });

  it('should be created', inject([MorphApiService], (service: MorphApiService) => {
    expect(service).toBeTruthy();
  }));
});
