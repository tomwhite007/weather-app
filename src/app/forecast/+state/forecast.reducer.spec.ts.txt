import { Action } from '@ngrx/store';

import * as ForecastActions from './forecast.actions';
import { ForecastElement } from './forecast.models';
import {
  ForecastState,
  initialForecastState,
  forecastReducer,
} from './forecast.reducer';

describe('Forecast Reducer', () => {
  describe('valid Forecast actions', () => {
    it('loadForecastSuccess should return the list of known Forecast', () => {
      const action = ForecastActions.loadForecastSuccess({ forecast });

      const result: ForecastState = forecastReducer(
        initialForecastState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
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
