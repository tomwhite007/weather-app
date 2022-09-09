import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  ForecastTableRow,
  ForecastTableViewmodel,
} from '../+state/forecast.models';

@Component({
  selector: 'app-five-day-forecast-table',
  templateUrl: './five-day-forecast-table.component.html',
  styleUrls: ['./five-day-forecast-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiveDayForecastTableComponent {
  @Input() columns!: ForecastTableViewmodel['columns'];
  @Input() set table(table: ForecastTableViewmodel['table']) {
    this.heading = table[0];
    this.rows = table.filter((r, i) => i > 0);
  }
  @Input() city!: string;

  heading!: ForecastTableRow;
  rows!: ForecastTableRow[];
}
