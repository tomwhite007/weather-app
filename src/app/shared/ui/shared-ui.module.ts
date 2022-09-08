import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPickerComponent } from './city-picker/city-picker.component';

@NgModule({
  declarations: [
    CityPickerComponent
  ],
  imports: [CommonModule],
  exports: [
    CityPickerComponent
  ],
})
export class SharedUiModule {}
