import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import * as ForecastActions from './forecast.actions';
import { ForecastElement } from './forecast.models';
import * as ForecastFeature from './forecast.reducer';
import { ForecastAdapterService } from './services/forecast-adapter.service';
import { FiveDayForecastApiResult } from './services/models/five-day-forecast-api-result';
import { WeatherApiService } from './services/weather-api.service';

@Injectable()
export class ForecastEffects {
  loadForecast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ForecastActions.loadForecast),
      switchMap(({ city }) => this.api.getFiveDayForecast(city)),
      map((res) => this.adapter.adaptWeatherApiToForecastState(res)),
      map((forecast: ForecastElement[]) =>
        ForecastActions.loadForecastSuccess({ forecast })
      ),
      catchError((err) => of(ForecastActions.loadForecastFailure(err)))
    )
  );

  constructor(
    private readonly actions$: Actions,
    private api: WeatherApiService,
    private adapter: ForecastAdapterService
  ) {}
}
