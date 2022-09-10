import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  ForecastTableDef,
  WeatherInfoRowElement,
} from '../../+state/forecast.models';

@Component({
  selector: '[appForecastRow]',
  templateUrl: './forecast-row.component.html',
  styleUrls: ['./forecast-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastRowComponent {
  @Input() row!: WeatherInfoRowElement;
  @Input() columns!: ForecastTableDef['dayColumns'];
}
