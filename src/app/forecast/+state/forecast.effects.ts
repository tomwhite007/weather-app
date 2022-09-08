import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as ForecastActions from './forecast.actions';
import * as ForecastFeature from './forecast.reducer';

@Injectable()
export class ForecastEffects {
  // init$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ForecastActions.initForecast)
  //     // fetch({
  //     //   run: (action) => {
  //     //     // Your custom service 'load' logic goes here. For now just return a success action...
  //     //     return ForecastActions.loadForecastSuccess({ forecast: [] });
  //     //   },
  //     //   onError: (action, error) => {
  //     //     console.error('Error', error);
  //     //     return ForecastActions.loadForecastFailure({ error });
  //     //   },
  //     // })
  //   )
  // );

  constructor(private readonly actions$: Actions) {}
}
