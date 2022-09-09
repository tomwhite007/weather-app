import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ForecastTableViewmodel } from '../+state/forecast.models';

@Component({
  selector: 'app-five-day-forecast-table',
  templateUrl: './five-day-forecast-table.component.html',
  styleUrls: ['./five-day-forecast-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiveDayForecastTableComponent {
  @Input() columns!: ForecastTableViewmodel['columns'];
  @Input() table!: ForecastTableViewmodel['table'];
  @Input() city!: string;
}
