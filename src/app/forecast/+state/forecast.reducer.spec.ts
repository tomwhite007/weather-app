import { Action } from '@ngrx/store';

import * as ForecastActions from './forecast.actions';
import {
  ForecastState,
  initialForecastState,
  forecastReducer,
} from './forecast.reducer';
import { mockAdaptedForecastTableDef } from './services/mocks/mock-adapted-forecast-table-def';

describe('Forecast Reducer', () => {
  describe('valid Forecast actions', () => {
    it('loadForecastSuccess should return the list of known Forecast', () => {
      const action = ForecastActions.loadForecastSuccess({
        forecast: mockAdaptedForecastTableDef,
      });

      const result: ForecastState = forecastReducer(
        initialForecastState,
        action
      );

      expect(result.loaded).toEqual(true);
      expect(result.forecast).toEqual(mockAdaptedForecastTableDef);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = forecastReducer(initialForecastState, action);

      expect(result).toBe(initialForecastState);
    });
  });
});
