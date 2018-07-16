import { TestBed, inject } from '@angular/core/testing';

import { BankGuardService } from './bank-guard.service';

describe('BankGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankGuardService]
    });
  });

  it('should be created', inject([BankGuardService], (service: BankGuardService) => {
    expect(service).toBeTruthy();
  }));
});
