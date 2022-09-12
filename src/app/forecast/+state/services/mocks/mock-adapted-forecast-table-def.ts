import { ForecastTableDef } from '../../forecast.models';

export const mockAdaptedForecastTableDef: ForecastTableDef = {
  dayColumns: ['0', '1', '2', '3', '4'],
  headingRow: {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
  },
  weatherInfoRows: [
    {
      0: '22.55',
      1: '24.68',
      2: '17.22',
      3: '17.72',
      4: '17.26',
      nameDesktop: 'Temperature (°C)',
      nameMobile: '°C',
    },
    {
      0: '5',
      1: '5',
      2: '7',
      3: '8',
      4: '6',
      nameDesktop: 'Windspeed (mph)',
      nameMobile: 'Wind mph',
    },
    {
      0: 'broken clouds',
      1: 'overcast clouds',
      2: 'moderate rain',
      3: 'light rain',
      4: 'overcast clouds',
      nameDesktop: 'Weather',
      nameMobile: '',
    },
  ],
  iconRow: {
    0: {
      src: 'http://openweathermap.org/img/wn/04d@2x.png',
      alt: 'Clouds',
    },
    1: {
      src: 'http://openweathermap.org/img/wn/04d@2x.png',
      alt: 'Clouds',
    },
    2: { src: 'http://openweathermap.org/img/wn/10d@2x.png', alt: 'Rain' },
    3: { src: 'http://openweathermap.org/img/wn/10d@2x.png', alt: 'Rain' },
    4: {
      src: 'http://openweathermap.org/img/wn/04d@2x.png',
      alt: 'Clouds',
    },
  },
};
