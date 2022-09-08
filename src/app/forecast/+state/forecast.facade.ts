import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as ForecastActions from './forecast.actions';
import * as ForecastFeature from './forecast.reducer';
import * as ForecastSelectors from './forecast.selectors';

@Injectable()
export class ForecastFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(ForecastSelectors.getForecastLoaded));
  allForecast$ = this.store.pipe(select(ForecastSelectors.getAllForecast));
  selectedForecast$ = this.store.pipe(select(ForecastSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(ForecastActions.initForecast());
  }
}
