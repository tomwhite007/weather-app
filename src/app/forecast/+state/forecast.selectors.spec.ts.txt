import { ForecastElement } from './forecast.models';
import {
  forecastAdapter,
  ForecastPartialState,
  initialForecastState,
} from './forecast.reducer';
import * as ForecastSelectors from './forecast.selectors';

describe('Forecast Selectors', () => {
  const ERROR_MSG = 'No Error Available';

  let state: ForecastPartialState;

  beforeEach(() => {
    state = {};
  });

  describe('Forecast Selectors', () => {
    it('getAllForecast() should return the list of Forecast', () => {
      const results = ForecastSelectors.getForecast(state);
      const selId = getForecastId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getForecastLoaded() should return the current "loaded" status', () => {
      const result = ForecastSelectors.getForecastLoaded(state);

      expect(result).toBe(true);
    });

    it('getForecastError() should return the current "error" state', () => {
      const result = ForecastSelectors.getForecastError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
