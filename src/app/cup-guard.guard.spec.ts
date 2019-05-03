import { TestBed, async, inject } from '@angular/core/testing';

import { CupGuardGuard } from './cup-guard.guard';

describe('CupGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CupGuardGuard]
    });
  });

  it('should ...', inject([CupGuardGuard], (guard: CupGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
