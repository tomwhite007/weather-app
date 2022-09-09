import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPickerComponent } from './city-picker/city-picker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CityPickerComponent],
  imports: [CommonModule, FormsModule],
  exports: [CityPickerComponent],
})
export class SharedUiModule {}
