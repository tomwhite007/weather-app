import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-picker',
  templateUrl: './city-picker.component.html',
  styleUrls: ['./city-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityPickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
