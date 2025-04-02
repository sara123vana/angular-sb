import { TestBed } from '@angular/core/testing';

import { ViewshoppingsService } from './viewshoppings.service';

describe('ViewshoppingsService', () => {
  let service: ViewshoppingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewshoppingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
