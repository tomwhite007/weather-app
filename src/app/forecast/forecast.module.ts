import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastComponent } from './forecast.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ForecastEffects } from './+state/forecast.effects';
import * as fromForecast from './+state/forecast.reducer';
import { FiveDayForecastTableComponent } from './five-day-forecast-table/five-day-forecast-table.component';
import { SharedUiModule } from '../shared/ui/shared-ui.module';
import { ForecastHeaderCellComponent } from './five-day-forecast-table/forecast-header-cell/forecast-header-cell.component';
import { ForecastRowComponent } from './five-day-forecast-table/forecast-row/forecast-row.component';
import { ForecastIconRowComponent } from './five-day-forecast-table/forecast-icon-row/forecast-icon-row.component';

@NgModule({
  declarations: [
    ForecastComponent,
    FiveDayForecastTableComponent,
    ForecastHeaderCellComponent,
    ForecastRowComponent,
    ForecastIconRowComponent,
  ],
  imports: [
    CommonModule,
    ForecastRoutingModule,
    StoreModule.forFeature(
      fromForecast.FORECAST_FEATURE_KEY,
      fromForecast.forecastReducer
    ),
    EffectsModule.forFeature([ForecastEffects]),
    SharedUiModule,
  ],
})
export class ForecastModule {}
