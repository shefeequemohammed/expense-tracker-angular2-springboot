import { TestBed, inject } from '@angular/core/testing';

import { NewVendorService } from './new-vendor.service';

describe('NewVendorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewVendorService]
    });
  });

  it('should be created', inject([NewVendorService], (service: NewVendorService) => {
    expect(service).toBeTruthy();
  }));
});
