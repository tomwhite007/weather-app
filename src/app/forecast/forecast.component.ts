import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ForecastAdapterService } from './+state/services/forecast-adapter.service';
import { WeatherApiService } from './+state/services/weather-api.service';
import { ForecastComponentStateService } from './services/forecast-component-state.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ForecastComponentStateService],
})
export class ForecastComponent implements OnInit {
  constructor(private state: ForecastComponentStateService) {}

  ngOnInit(): void {
    this.state.init();
  }

  getForecast(city: string) {
    this.state.getForecast(city);
  }
}
