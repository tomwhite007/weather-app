import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ForecastElement, ForecastTableDef } from '../forecast.models';
import { FiveDayForecastApiResult } from './models/five-day-forecast-api-result';

interface ResponsiveTitles {
  nameDesktop: string;
  nameMobile: string;
}

interface RowTitleLookup {
  temperature: ResponsiveTitles;
  windspeed: ResponsiveTitles;
  weatherDescription: ResponsiveTitles;
}

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

  readonly rowTitleLookup = {
    temperature: { nameDesktop: 'Temperature (°C)', nameMobile: '°C' },
    windspeed: { nameDesktop: 'Windspeed (mph)', nameMobile: 'Wind mph' },
    weatherDescription: { nameDesktop: 'Weather', nameMobile: '' },
  };

  adaptApiToForecast(apiResult: FiveDayForecastApiResult): ForecastTableDef {
    return this.adaptVerticalForecastToCrosstabModel(
      this.adaptWeatherApiToVerticalForecast(apiResult)
    );
  }

  private adaptWeatherApiToVerticalForecast(
    apiResult: FiveDayForecastApiResult
  ): ForecastElement[] {
    return (
      apiResult.list
        // assume midday forecast is best to describe the day's weather
        .filter((f) => f.dt_txt.endsWith(' 12:00:00'))
        .map((f, i) => ({
          id: i.toString(),
          isoDate: f.dt_txt,
          day: this.daysOfTheWeek[new Date(f.dt_txt).getDay()],
          temperature: f.main.temp.toString(),
          windspeed: Math.round(f.wind.speed * 2.237).toString(), // m/s converted to mph
          weatherDescription: f.weather[0].description,
          weatherIcon: f.weather[0].icon,
          weatherShortText: f.weather[0].main,
        }))
    );
  }

  private adaptVerticalForecastToCrosstabModel(
    forecast: ForecastElement[]
  ): ForecastTableDef {
    return {
      dayColumns: [...forecast.map((row) => row.id)],
      headingRow: this.convertColumn(forecast, 'day'),
      weatherInfoRows: this.weatherInfoRows(forecast),
      iconRow: this.iconRow(forecast),
    };
  }

  private weatherInfoRows(forecast: ForecastElement[]) {
    const weatherInfoRows = [];
    let key: keyof RowTitleLookup;
    for (key in this.rowTitleLookup) {
      if (Object.prototype.hasOwnProperty.call(this.rowTitleLookup, key)) {
        weatherInfoRows.push({
          ...this.rowTitleLookup[key],
          ...this.convertColumn(forecast, key),
        });
      }
    }
    return weatherInfoRows;
  }

  private iconRow(rows: ForecastElement[]): ForecastTableDef['iconRow'] {
    return Object.assign(
      {},
      ...rows.map((row) => ({
        [row.id]: {
          src: environment.api.iconUrl.replace('{icon}', row.weatherIcon),
          alt: row.weatherShortText,
        },
      }))
    );
  }

  private convertColumn(
    rows: ForecastElement[],
    key: keyof ForecastElement
  ): { [key: string]: string } {
    return Object.assign({}, ...rows.map((row) => ({ [row.id]: row[key] })));
  }
}
