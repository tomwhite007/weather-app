import { Injectable } from '@angular/core';
import { ForecastElement } from '../forecast.models';
import { FiveDayForecastApiResult } from './models/five-day-forecast-api-result';

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
    return (
      apiResult.list
        // assume midday forecast is best to describe the day's weather
        .filter((f) => f.dt_txt.endsWith(' 12:00:00'))
        .map((f, i) => ({
          id: i,
          isoDate: f.dt_txt,
          day: this.daysOfTheWeek[new Date(f.dt_txt).getDay()],
          temperature: f.main.temp,
          windspeed: Math.round(f.wind.speed * 2.237), // m/s converted to mph
          weatherDescription: f.weather[0].description,
          weatherIcon: f.weather[0].icon,
          weatherShortText: f.weather[0].main,
        }))
    );
  }
}
