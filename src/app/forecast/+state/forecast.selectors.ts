import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ForecastElement, ForecastTableViewmodel } from './forecast.models';
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

export const getForecast = createSelector(
  getForecastState,
  (state: ForecastState) => state.forecast
);

export const getForecastTableViewModel = (iconUrl: string) =>
  createSelector(
    getForecastState,
    (state: ForecastState): ForecastTableViewmodel => ({
      city: state.city ?? '',
      forecast: state.forecast,
      message: state.loading
        ? 'Loading'
        : state.loaded
        ? null
        : state.error
        ? 'Oops. There was an error getting the forecast.'
        : 'Select a City above to see a five day forecast',
    })
  );

function convertColumn(
  rows: ForecastElement[],
  key: keyof ForecastElement
): { [key: string]: string } {
  return Object.assign({}, ...rows.map((row) => ({ [row.id]: row[key] })));
}
