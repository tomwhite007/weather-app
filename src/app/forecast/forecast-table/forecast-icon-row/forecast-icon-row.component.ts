import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ForecastTableDef } from '../../+state/forecast.models';

@Component({
  selector: '[forecastIconRow]',
  templateUrl: './forecast-icon-row.component.html',
  styleUrls: ['./forecast-icon-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastIconRowComponent {
  @Input() iconRow!: ForecastTableDef['iconRow'];
  @Input() columns!: ForecastTableDef['dayColumns'];
}
