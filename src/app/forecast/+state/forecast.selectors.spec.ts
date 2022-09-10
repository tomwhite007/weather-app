import { ForecastPartialState, FORECAST_FEATURE_KEY } from './forecast.reducer';
import * as ForecastSelectors from './forecast.selectors';
import { mockAdaptedForecastTableDef } from './services/mocks/mock-adapted-forecast-table-def';

describe('Forecast Selectors', () => {
  let state: ForecastPartialState;

  describe('Forecast Selectors', () => {
    it('getForecastTableViewModel() should return the view model for the forecast component', () => {
      state = {
        forecast: {
          city: 'Birmingham',
          forecast: mockAdaptedForecastTableDef,
          loading: false,
          loaded: true,
          error: null,
        },
      };

      const results = ForecastSelectors.getForecastTableViewModel(state);

      expect(results).toEqual({
        city: 'Birmingham',
        forecast: mockAdaptedForecastTableDef,
        message: null,
      });
    });
  });
});
