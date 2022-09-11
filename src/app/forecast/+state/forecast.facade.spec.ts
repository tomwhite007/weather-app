import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { firstValueFrom, of, throwError } from 'rxjs';
import * as ForecastActions from './forecast.actions';
import { ForecastEffects } from './forecast.effects';
import { ForecastFacade } from './forecast.facade';
import {
  FORECAST_FEATURE_KEY,
  ForecastState,
  forecastReducer,
} from './forecast.reducer';
import { ForecastAdapterService } from './services/forecast-adapter.service';
import { mockAdaptedForecastTableDef } from './services/mocks/mock-adapted-forecast-table-def';
import { mockForecastApiResult } from './services/mocks/mock-forecast-api-result';
import { WeatherApiService } from './services/weather-api.service';

interface TestSchema {
  forecast: ForecastState;
}

describe('ForecastFacade', () => {
  let facade: ForecastFacade;
  let store: Store<TestSchema>;
  const api = jasmine.createSpyObj('api', ['getFiveDayForecast']);

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(FORECAST_FEATURE_KEY, forecastReducer),
          EffectsModule.forFeature([ForecastEffects]),
          HttpClientTestingModule,
        ],
        providers: [
          ForecastAdapterService,
          { provide: WeatherApiService, useValue: api },
          ForecastFacade,
        ],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(ForecastFacade);
    });

    it('state should flow from empty forecast, to populated', async () => {
      api.getFiveDayForecast.and.returnValue(of(mockForecastApiResult));

      let loaded = await firstValueFrom(facade.loaded$);
      expect(loaded).toBe(false);

      let vm = await firstValueFrom(facade.forecastTableViewModel$);
      expect(vm).toEqual({
        city: '',
        forecast: null,
        message: 'Select a City above to see a five day forecast',
      });

      facade.getForecast('London');

      vm = await firstValueFrom(facade.forecastTableViewModel$);
      expect(vm).toEqual({
        city: 'London',
        forecast: mockAdaptedForecastTableDef,
        message: null,
      });

      loaded = await firstValueFrom(facade.loaded$);
      expect(loaded).toBe(true);
    });

    it('state should reset from populated forecast, to empty', async () => {
      store.dispatch(
        ForecastActions.loadForecastSuccess({
          forecast: mockAdaptedForecastTableDef,
        })
      );

      facade.init();

      const vm = await firstValueFrom(facade.forecastTableViewModel$);
      expect(vm).toEqual({
        city: '',
        forecast: null,
        message: 'Select a City above to see a five day forecast',
      });
    });

    it('state should flow from empty forecast, to error state', async () => {
      api.getFiveDayForecast.and.returnValue(
        throwError(() => new Error('test'))
      );

      let vm = await firstValueFrom(facade.forecastTableViewModel$);
      expect(vm).toEqual({
        city: '',
        forecast: null,
        message: 'Select a City above to see a five day forecast',
      });

      facade.getForecast('London');

      vm = await firstValueFrom(facade.forecastTableViewModel$);
      expect(vm).toEqual({
        city: 'London',
        forecast: null,
        message: 'Oops. There was an error getting the forecast.',
      });
    });
  });
});
