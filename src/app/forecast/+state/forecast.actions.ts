import { createAction, props } from '@ngrx/store';
import { ForecastElement } from './forecast.models';

export const initForecast = createAction('[Forecast Page] Init');

export const loadForecast = createAction(
  '[Forecast/API] Load Forecast',
  props<{ city: string }>()
);

export const loadForecastSuccess = createAction(
  '[Forecast/API] Load Forecast Success',
  props<{ forecast: ForecastElement[] }>()
);

export const loadForecastFailure = createAction(
  '[Forecast/API] Load Forecast Failure',
  props<{ error: any }>()
);
