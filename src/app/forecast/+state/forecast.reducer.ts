import { createReducer, on, Action } from '@ngrx/store';

import * as ForecastActions from './forecast.actions';
import { ForecastElement } from './forecast.models';

export const FORECAST_FEATURE_KEY = 'forecast';

export interface ForecastState {
  city?: string | null;
  forecast: ForecastElement[];
  loading: boolean;
  loaded: boolean; // has the Forecast list been loaded
  error?: string | null; // last known error (if any)
}

export interface ForecastPartialState {
  readonly [FORECAST_FEATURE_KEY]: ForecastState;
}

export const initialForecastState: ForecastState = {
  forecast: [],
  loading: false,
  loaded: false,
};

const reducer = createReducer(
  initialForecastState,
  on(ForecastActions.initForecast, (state) => ({
    ...state,
    city: null,
    forecast: [],
    loading: false,
    loaded: false,
    error: null,
  })),
  // TODO: add loadForecast action here
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
