export function environmentCommon() {
  return {
    api: {
      openWeatherMapApiKey: 'fe3695759da76e0c9dcaf566634a08ed',
      fiveDayForecastUrl:
        'https://api.openweathermap.org/data/2.5/forecast?q={cityName},{countryCode}&appid={apiKey}&units=metric',
      ukCountryCode: 'GB',
    },
    cities: ['Birmingham', 'London', 'Cardiff'],
  };
}
