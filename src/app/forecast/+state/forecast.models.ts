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

export interface ForecastTableRow {
  type: string;
  nameDesktop?: string;
  nameMobile?: string;
  [key: string]: string | undefined;
}

export interface ForecastTableViewmodel {
  city: string;
  columns: string[];
  table: ForecastTableRow[];
  message: string | null;
}
