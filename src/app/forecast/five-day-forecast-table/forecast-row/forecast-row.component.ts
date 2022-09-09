import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ForecastTableRow } from '../../+state/forecast.models';

@Component({
  selector: '[appForecastRow]',
  templateUrl: './forecast-row.component.html',
  styleUrls: ['./forecast-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastRowComponent {
  @Input() row!: ForecastTableRow;
  @Input() cols!: string[];
  @Input() rowIdx!: number;
}
