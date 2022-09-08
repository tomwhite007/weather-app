import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as ForecastActions from './forecast.actions';
import * as ForecastSelectors from './forecast.selectors';

@Injectable({ providedIn: 'any' })
export class ForecastFacade {
  loaded$ = this.store.pipe(select(ForecastSelectors.getForecastLoaded));
  allForecast$ = this.store.pipe(select(ForecastSelectors.getAllForecast));

  constructor(private readonly store: Store) {}

  init() {
    this.store.dispatch(ForecastActions.initForecast());
  }

  getForecast(city: string) {
    this.store.dispatch(ForecastActions.loadForecast({ city }));
  }
}
