import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-five-day-forecast-table',
  templateUrl: './five-day-forecast-table.component.html',
  styleUrls: ['./five-day-forecast-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiveDayForecastTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
