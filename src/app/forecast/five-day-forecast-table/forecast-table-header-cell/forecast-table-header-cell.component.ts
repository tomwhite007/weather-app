import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-table-header-cell',
  templateUrl: './forecast-table-header-cell.component.html',
  styleUrls: ['./forecast-table-header-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastTableHeaderCellComponent {
  @Input()
  set heading(value: string | undefined) {
    if (!value) return;
    this.longName = value;
    this.shortName = value?.substring(0, 3);
  }
  longName = '';
  shortName = '';
}
