import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FiveDayForecastApiResult } from './models/five-day-forecast-api-result';

@Injectable()
export class WeatherApiService {
  constructor(private http: HttpClient) {}

  getFiveDayForecast(city: string) {
    console.log('api');
    const url = environment.api.fiveDayForecastUrl
      .replace('{apiKey}', environment.api.openWeatherMapApiKey)
      .replace('{countryCode}', environment.api.ukCountryCode)
      .replace('{cityName}', city);

    return this.http.get<FiveDayForecastApiResult>(url);
  }
}
