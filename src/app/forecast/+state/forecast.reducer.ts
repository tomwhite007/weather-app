import { createReducer, on, Action } from '@ngrx/store';

import * as ForecastActions from './forecast.actions';
import { ForecastElement, ForecastTableDef } from './forecast.models';

export const FORECAST_FEATURE_KEY = 'forecast';

export interface ForecastState {
  city?: string | null;
  forecast: ForecastTableDef | null;
  loading: boolean;
  loaded: boolean; // has the Forecast list been loaded
  error?: unknown; // last known error (if any)
}

export interface ForecastPartialState {
  readonly [FORECAST_FEATURE_KEY]: ForecastState;
}

export const initialForecastState: ForecastState = {
  forecast: null,
  loading: false,
  loaded: false,
};

const reducer = createReducer(
  initialForecastState,
  on(ForecastActions.initForecast, (state) => ({
    ...state,
    city: null,
    forecast: null,
    loading: false,
    loaded: false,
    error: null,
  })),
  on(ForecastActions.loadForecast, (state, { city }) => ({
    ...state,
    city,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(ForecastActions.loadForecastSuccess, (state, { forecast }) => ({
    ...state,
    forecast,
    loading: false,
    loaded: true,
  })),
  on(ForecastActions.loadForecastFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  }))
);

export function forecastReducer(
  state: ForecastState | undefined,
  action: Action
) {
  return reducer(state, action);
}
