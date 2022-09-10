import { Injectable } from '@angular/core';
import { ForecastElement } from '../forecast.models';
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

  adaptWeatherApiToForecastState(
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

  adaptForecastArrayToCrosstabModel(forecast: ForecastElement[]) {
    return {
      dayColumns: [...forecast.map((row) => row.id)],
      headingRow: convertColumn(forecast, 'day'),
      weatherInfoRows: this.weatherInfoRows(forecast),

      // [
      //   {
      //     type: 'text',
      //     nameDesktop: 'Temperature (°C)',
      //     nameMobile: '°C',
      //     ...convertColumn(forecast, 'temperature'),
      //   },
      //   {
      //     type: 'text',
      //     nameDesktop: 'Windspeed (mph)',
      //     nameMobile: 'Wind mph',
      //     ...convertColumn(forecast, 'windspeed'),
      //   },
      //   {
      //     type: 'text',
      //     nameDesktop: 'Weather',
      //     ...convertColumn(forecast, 'weatherDescription'),
      //   },
      // ],
      iconRow: {},
      // {
      //   type: 'icon',
      //   ...Object.assign(
      //     {},
      //     ...forecast.map((row) => ({
      //       [row.id]: iconUrl.replace('{icon}', row.weatherIcon),
      //     }))
      //   ),
      // },
      // ] as ForecastTableRow[],
      // message: state.loading
      //   ? 'Loading'
      //   : state.loaded
      //   ? null
      //   : state.error
      //   ? 'Oops. There was an error getting the forecast.'
      //   : 'Select a City above to see a five day forecast',
    };
  }

  private weatherInfoRows(forecast: ForecastElement[]) {
    const weatherInfoRows = [];
    let key: keyof RowTitleLookup;
    for (key in this.rowTitleLookup) {
      if (Object.prototype.hasOwnProperty.call(this.rowTitleLookup, key)) {
        weatherInfoRows.push({
          ...this.rowTitleLookup[key],
          ...convertColumn(forecast, key),
        });
      }
    }
    return weatherInfoRows;
  }
}

function convertColumn(
  rows: ForecastElement[],
  key: keyof ForecastElement
): { [key: string]: string } {
  return Object.assign({}, ...rows.map((row) => ({ [row.id]: row[key] })));
}
