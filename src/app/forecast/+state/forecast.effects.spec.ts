import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable, of, throwError } from 'rxjs';

import * as ForecastActions from './forecast.actions';
import { ForecastEffects } from './forecast.effects';
import { mockAdaptedForecastTableDef } from './services/mocks/mock-adapted-forecast-table-def';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { mockForecastApiResult } from './services/mocks/mock-forecast-api-result';
import { HttpClient } from '@angular/common/http';
import { WeatherApiService } from './services/weather-api.service';
import { ForecastAdapterService } from './services/forecast-adapter.service';

describe('ForecastEffects', () => {
  let actions: Observable<Action>;
  let effects: ForecastEffects;
  const api = jasmine.createSpyObj('api', ['getFiveDayForecast']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ForecastEffects,
        provideMockActions(() => actions),
        provideMockStore(),
        ForecastAdapterService,
        { provide: WeatherApiService, useValue: api },
      ],
    });

    effects = TestBed.inject(ForecastEffects);
  });

  describe('loadForecast$', () => {
    it('should load Forecast and convert to view model', () => {
      api.getFiveDayForecast.and.returnValue(of(mockForecastApiResult));

      actions = hot('-a-|', {
        a: ForecastActions.loadForecast({ city: 'London' }),
      });

      const expected = hot('-a-|', {
        a: ForecastActions.loadForecastSuccess({
          forecast: mockAdaptedForecastTableDef,
        }),
      });

      expect(effects.loadForecast$).toBeObservable(expected);
    });

    it('should attempt to load Forecast and then log error', () => {
      api.getFiveDayForecast.and.returnValue(
        throwError(() => new Error('test'))
      );

      actions = hot('-a-|', {
        a: ForecastActions.loadForecast({ city: 'London' }),
      });

      const expected = hot('-(a|)', {
        a: ForecastActions.loadForecastFailure({
          error: 'test',
        }),
      });

      expect(effects.loadForecast$).toBeObservable(expected);
    });
  });
});
