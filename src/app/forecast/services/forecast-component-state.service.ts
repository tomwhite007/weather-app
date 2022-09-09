import { Injectable } from '@angular/core';
import { ObservableInput } from 'rxjs';
import { ForecastFacade } from '../+state/forecast.facade';

@Injectable()
export class ForecastComponentStateService {
  vm$ = this.facade.forecastTableViewModel$;

  constructor(private facade: ForecastFacade) {}

  init() {
    this.facade.init();

    this.facade.forecastTableViewModel$.subscribe((res) => {
      console.log(res);
    });
  }

  getForecast(city: string) {
    this.facade.getForecast(city);
  }
}
