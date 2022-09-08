import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ForecastAdapterService } from './+state/services/forecast-adapter.service';
import { WeatherApiService } from './+state/services/weather-api.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastComponent implements OnInit {
  constructor(
    private weather: WeatherApiService,
    private adapt: ForecastAdapterService
  ) {}

  ngOnInit(): void {
    this.weather.getFiveDayForecast('Birmingham').subscribe((res) => {
      console.log(this.adapt.adaptWeatherApiToForecastState(res));
    });
  }
}
