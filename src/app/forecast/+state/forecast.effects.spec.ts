import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ForecastActions from './forecast.actions';
import { ForecastEffects } from './forecast.effects';

describe('ForecastEffects', () => {
  let actions: Observable<Action>;
  let effects: ForecastEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ForecastEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ForecastEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ForecastActions.initForecast() });

      const expected = hot('-a-|', {
        a: ForecastActions.loadForecastSuccess({ forecast: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
