export interface EnvironmentModel {
  api: {
    openWeatherMapApiKey: string;
    fiveDayForecastUrl: string;
    ukCountryCode: string;
  };
  cities: string[];
  production: boolean;
}
