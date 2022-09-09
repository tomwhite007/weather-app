import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ForecastElement,
  ForecastTableRow,
  ForecastTableViewmodel,
} from './forecast.models';
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
      columns: [
        'nameDesktop',
        'nameMobile',
        ...state.forecast.map((row) => row.id),
      ],
      table: [
        { type: 'heading', ...convertColumn(state.forecast, 'day') },
        {
          type: 'text',
          nameDesktop: 'Temperature (°C)',
          nameMobile: '°C',
          ...convertColumn(state.forecast, 'temperature'),
        },
        {
          type: 'text',
          nameDesktop: 'Windspeed (mph)',
          nameMobile: 'Wind mph',
          ...convertColumn(state.forecast, 'windspeed'),
        },
        {
          type: 'text',
          nameDesktop: 'Weather',
          ...convertColumn(state.forecast, 'weatherDescription'),
        },
        {
          type: 'icon',
          ...Object.assign(
            {},
            ...state.forecast.map((row) => ({
              [row.id]: iconUrl.replace('{icon}', row.weatherIcon),
            }))
          ),
        },
      ] as ForecastTableRow[],
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
