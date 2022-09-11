import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as ForecastActions from './forecast.actions';
import * as ForecastSelectors from './forecast.selectors';

@Injectable()
export class ForecastFacade {
  loaded$ = this.store.pipe(select(ForecastSelectors.getForecastLoaded));
  forecast$ = this.store.pipe(select(ForecastSelectors.getForecast));
  forecastTableViewModel$ = this.store.pipe(
    select(ForecastSelectors.getForecastTableViewModel)
  );

  constructor(private readonly store: Store) {}

  init() {
    this.store.dispatch(ForecastActions.initForecast());
  }

  getForecast(city: string) {
    if (!city) return this.init();
    this.store.dispatch(ForecastActions.loadForecast({ city }));
  }
}
