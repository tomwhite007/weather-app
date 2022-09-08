import { Injectable } from '@angular/core';
import { ForecastFacade } from '../+state/forecast.facade';

@Injectable()
export class ForecastComponentStateService {
  constructor(private facade: ForecastFacade) {}

  init() {
    this.facade.init();
  }

  getForecast(city: string) {
    this.facade.getForecast(city);
  }
}
