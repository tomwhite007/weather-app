import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FORECAST_FEATURE_KEY, ForecastState } from './forecast.reducer';

// Lookup the 'Forecast' feature state managed by NgRx
export const getForecastState =
  createFeatureSelector<ForecastState>(FORECAST_FEATURE_KEY);

export const getForecastLoaded = createSelector(
  getForecastState,
  (state: ForecastState) => state.loaded
);

export const getForecastError = createSelector(
  getForecastState,
  (state: ForecastState) => state.error
);

export const getAllForecast = createSelector(
  getForecastState,
  (state: ForecastState) => state.forecast
);
