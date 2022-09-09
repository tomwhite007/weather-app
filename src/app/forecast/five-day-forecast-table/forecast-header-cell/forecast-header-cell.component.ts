import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-header-cell',
  templateUrl: './forecast-header-cell.component.html',
  styleUrls: ['./forecast-header-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastHeaderCellComponent {
  @Input()
  set heading(value: string | undefined) {
    if (!value) return;
    this.longName = value;
    this.shortName = value?.substring(0, 3);
  }
  longName = '';
  shortName = '';
}
