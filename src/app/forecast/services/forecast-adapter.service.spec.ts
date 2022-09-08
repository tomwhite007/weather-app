import { TestBed } from '@angular/core/testing';

import { ForecastAdapterService } from './forecast-adapter.service';

describe('ForecastAdapterService', () => {
  let service: ForecastAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForecastAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
