import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  FORECAST_FEATURE_KEY,
  ForecastState,
  forecastAdapter,
} from './forecast.reducer';

// Lookup the 'Forecast' feature state managed by NgRx
export const getForecastState =
  createFeatureSelector<ForecastState>(FORECAST_FEATURE_KEY);

const { selectAll, selectEntities } = forecastAdapter.getSelectors();

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
  (state: ForecastState) => selectAll(state)
);

export const getForecastEntities = createSelector(
  getForecastState,
  (state: ForecastState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getForecastState,
  (state: ForecastState) => state.selectedId
);

export const getSelected = createSelector(
  getForecastEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
