import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ForecastTableDef } from '../+state/forecast.models';

@Component({
  selector: 'app-forecast-table',
  templateUrl: './forecast-table.component.html',
  styleUrls: ['./forecast-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastTableComponent {
  @Input() table!: ForecastTableDef;
  @Input() city!: string;
}
