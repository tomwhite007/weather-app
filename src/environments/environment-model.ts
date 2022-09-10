export interface EnvironmentModel {
  api: {
    openWeatherMapApiKey: string;
    fiveDayForecastUrl: string;
    ukCountryCode: string;
    iconUrl: string;
  };
  cities: string[];
  production: boolean;
}
