import { ForecastElement } from './forecast.models';
import {
  forecastAdapter,
  ForecastPartialState,
  initialForecastState,
} from './forecast.reducer';
import * as ForecastSelectors from './forecast.selectors';

describe('Forecast Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getForecastId = (it: ForecastElement) => it.id;
  const createForecastEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ForecastElement);

  let state: ForecastPartialState;

  beforeEach(() => {
    state = {
      forecast: forecastAdapter.setAll(
        [
          createForecastEntity('PRODUCT-AAA'),
          createForecastEntity('PRODUCT-BBB'),
          createForecastEntity('PRODUCT-CCC'),
        ],
        {
          ...initialForecastState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Forecast Selectors', () => {
    it('getAllForecast() should return the list of Forecast', () => {
      const results = ForecastSelectors.getAllForecast(state);
      const selId = getForecastId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ForecastSelectors.getSelected(state) as ForecastElement;
      const selId = getForecastId(result);

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
