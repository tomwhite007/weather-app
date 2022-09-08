import { TestBed } from '@angular/core/testing';

import { ForecastComponentStateService } from './forecast-component-state.service';

describe('ForecastComponentStateService', () => {
  let service: ForecastComponentStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForecastComponentStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
