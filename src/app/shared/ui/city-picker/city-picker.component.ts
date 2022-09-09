import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-city-picker',
  templateUrl: './city-picker.component.html',
  styleUrls: ['./city-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityPickerComponent {
  @Input() options?: string[];
  @Output() selected = new EventEmitter<string>();

  val = '';

  handleSelect() {
    this.selected.emit(this.val);
  }
}
