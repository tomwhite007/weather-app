import { TestBed } from '@angular/core/testing';
import { ForecastTableDef } from '../forecast.models';

import { ForecastAdapterService } from './forecast-adapter.service';
import { mockAdaptedForecastTableDef } from './mocks/mock-adapted-forecast-table-def';
import { mockForecastApiResult } from './mocks/mock-forecast-api-result';

describe('ForecastAdapterService', () => {
  let service: ForecastAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForecastAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should adapt api result to forecast table def model', () => {
    expect(service.adaptApiToForecast(mockForecastApiResult)).toEqual(
      mockAdaptedForecastTableDef
    );
  });
});
