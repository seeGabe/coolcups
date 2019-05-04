import { TestBed } from '@angular/core/testing';

import { DialogCommService } from './dialog-comm.service';

describe('DialogCommService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DialogCommService = TestBed.get(DialogCommService);
    expect(service).toBeTruthy();
  });
});
