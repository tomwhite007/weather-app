import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ForecastComponentStateService } from './services/forecast-component-state.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ForecastComponentStateService],
})
export class ForecastComponent implements OnInit {
  cityPickerOptions = environment.cities;
  vm$ = this.state.vm$;

  constructor(private state: ForecastComponentStateService) {}

  ngOnInit(): void {
    this.state.init();
  }

  getForecast(city: string) {
    this.state.getForecast(city);
  }
}
