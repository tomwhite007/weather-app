import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: '[appForecastRow]',
  templateUrl: './forecast-row.component.html',
  styleUrls: ['./forecast-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastRowComponent {
  @Input() row!: unknown;
  @Input() cols!: string[];
  @Input() rowIdx!: number;
}
