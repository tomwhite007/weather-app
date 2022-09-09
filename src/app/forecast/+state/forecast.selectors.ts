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

export const getForecast = createSelector(
  getForecastState,
  (state: ForecastState) => state.forecast
);

export const getForecastTableViewModel = (iconUrl: string) =>
  createSelector(getForecastState, (state: ForecastState) => ({
    columns: ['name', ...state.forecast.map((row) => row.id)],
    table: [
      { name: null, ...state.forecast.map((row) => ({ [row.id]: row.day })) },
      {
        name: { desktop: 'Temperature (°C)', mobile: '°C' },
        ...state.forecast.map((row) => ({ [row.id]: row.temperature })),
      },
      {
        name: { desktop: 'Windspeed (mph)', mobile: 'Wind mph' },
        ...state.forecast.map((row) => ({ [row.id]: row.windspeed })),
      },
      {
        name: { desktop: 'Weather', mobile: '' },
        ...state.forecast.map((row) => ({ [row.id]: row.windspeed })),
      },
      {
        name: null,
        ...state.forecast.map((row) => ({
          [row.id]: iconUrl.replace('{icon}', row.weatherIcon),
        })),
      },
    ],
    message: state.loaded
      ? null
      : state.error ?? 'Select a City above to see a five day forecast',
    loading: state.loading,
  }));
