import { Injectable } from '@angular/core';
import { ForecastElement } from '../+state/forecast.models';
import { FiveDayForecastApiResult } from '../models/five-day-forecast-api-result';

@Injectable({
  providedIn: 'any',
})
export class ForecastAdapterService {
  readonly daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  adaptWeatherApiToForecastState(
    apiResult: FiveDayForecastApiResult
  ): ForecastElement[] {
    return apiResult.list
      .filter((f) => f.dt_txt.endsWith(' 12:00:00'))
      .map((f) => ({
        isoDate: f.dt_txt,
        day: this.daysOfTheWeek[new Date(f.dt).getDay()],
        temperature: f.main.temp,
        windspeed: f.wind.speed,
        weatherDescription: f.weather[0].description,
        weatherIcon: f.weather[0].icon,
      }));
  }
}
