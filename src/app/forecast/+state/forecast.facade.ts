import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as ForecastActions from './forecast.actions';
import * as ForecastSelectors from './forecast.selectors';
import { ForecastAdapterService } from './services/forecast-adapter.service';

@Injectable({ providedIn: 'any' })
export class ForecastFacade {
  loaded$ = this.store.pipe(select(ForecastSelectors.getForecastLoaded));
  forecast$ = this.store.pipe(select(ForecastSelectors.getForecast));
  forecastTableViewModel$ = this.store.pipe(
    select(ForecastSelectors.getForecastTableViewModel(environment.api.iconUrl))
  );

  constructor(
    private readonly store: Store,
    private adapter: ForecastAdapterService
  ) {}

  init() {
    this.store.dispatch(ForecastActions.initForecast());

    this.forecast$.subscribe((res) => {
      console.log(res);
    });

    this.newModel();
  }

  getForecast(city: string) {
    if (!city) return this.init();
    this.store.dispatch(ForecastActions.loadForecast({ city }));
  }
  newModel() {
    const adapted = [
      {
        id: '0',
        isoDate: '2022-09-10 12:00:00',
        day: 'Saturday',
        temperature: '16.85',
        windspeed: '7',
        weatherDescription: 'overcast clouds',
        weatherIcon: '04d',
        weatherShortText: 'Clouds',
      },
      {
        id: '1',
        isoDate: '2022-09-11 12:00:00',
        day: 'Sunday',
        temperature: '22.23',
        windspeed: '4',
        weatherDescription: 'overcast clouds',
        weatherIcon: '04d',
        weatherShortText: 'Clouds',
      },
      {
        id: '2',
        isoDate: '2022-09-12 12:00:00',
        day: 'Monday',
        temperature: '24.44',
        windspeed: '5',
        weatherDescription: 'overcast clouds',
        weatherIcon: '04d',
        weatherShortText: 'Clouds',
      },
      {
        id: '3',
        isoDate: '2022-09-13 12:00:00',
        day: 'Tuesday',
        temperature: '16.31',
        windspeed: '8',
        weatherDescription: 'heavy intensity rain',
        weatherIcon: '10d',
        weatherShortText: 'Rain',
      },
      {
        id: '4',
        isoDate: '2022-09-14 12:00:00',
        day: 'Wednesday',
        temperature: '17.31',
        windspeed: '5',
        weatherDescription: 'overcast clouds',
        weatherIcon: '04d',
        weatherShortText: 'Clouds',
      },
    ];

    console.log(this.adapter.adaptForecastArrayToCrosstabModel(adapted));
  }
}
