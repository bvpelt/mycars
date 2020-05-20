import { TestBed } from '@angular/core/testing';

import { CarOrdersService } from './car-orders.service';

describe('CarOrdersService', () => {
  let service: CarOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
