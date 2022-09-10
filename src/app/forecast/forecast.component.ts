import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ForecastFacade } from './+state/forecast.facade';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastComponent implements OnInit {
  cityPickerOptions = environment.cities;
  vm$ = this.facade.forecastTableViewModel$;

  constructor(private facade: ForecastFacade) {}

  ngOnInit(): void {
    this.facade.init();
  }

  getForecast(city: string) {
    this.facade.getForecast(city);
  }
}
