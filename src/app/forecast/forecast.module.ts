import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastComponent } from './forecast.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ForecastEffects } from './+state/forecast.effects';
import * as fromForecast from './+state/forecast.reducer';

@NgModule({
  declarations: [ForecastComponent],
  imports: [
    CommonModule,
    ForecastRoutingModule,
    StoreModule.forFeature(
      fromForecast.FORECAST_FEATURE_KEY,
      fromForecast.forecastReducer
    ),
    EffectsModule.forFeature([ForecastEffects]),
  ],
})
export class ForecastModule {}
