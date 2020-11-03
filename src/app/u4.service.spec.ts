import { TestBed } from '@angular/core/testing';

import { U4Service } from './u4.service';

describe('U4Service', () => {
  let service: U4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(U4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
