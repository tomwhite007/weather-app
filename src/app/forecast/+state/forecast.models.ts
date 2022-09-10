export interface ForecastElement {
  id: string;
  isoDate: string;
  day: string;
  temperature: string;
  windspeed: string;
  weatherDescription: string;
  weatherIcon: string;
  weatherShortText: string;
}

export interface ForecastTableDef {
  dayColumns: string[];
  headingRow: {
    [key: string]: string;
  };
  weatherInfoRows: WeatherInfoRowElement[];
  iconRow: { [key: string]: { src: string; alt: string } };
}

export interface WeatherInfoRowElement {
  nameDesktop: string;
  nameMobile: string;
  [key: string]: string;
}

export interface ForecastTableViewmodel {
  city: string;
  forecast: ForecastTableDef | null;
  message: string | null;
}
