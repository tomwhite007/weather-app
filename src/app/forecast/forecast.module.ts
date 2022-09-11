import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastComponent } from './forecast.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ForecastEffects } from './+state/forecast.effects';
import * as fromForecast from './+state/forecast.reducer';
import { ForecastTableComponent } from './forecast-table/forecast-table.component';
import { SharedUiModule } from '../shared/ui/shared-ui.module';
import { ForecastHeaderCellComponent } from './forecast-table/forecast-header-cell/forecast-header-cell.component';
import { ForecastRowComponent } from './forecast-table/forecast-row/forecast-row.component';
import { ForecastIconRowComponent } from './forecast-table/forecast-icon-row/forecast-icon-row.component';
import { ForecastAdapterService } from './+state/services/forecast-adapter.service';
import { WeatherApiService } from './+state/services/weather-api.service';
import { ForecastFacade } from './+state/forecast.facade';

@NgModule({
  declarations: [
    ForecastComponent,
    ForecastTableComponent,
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
  providers: [ForecastAdapterService, WeatherApiService, ForecastFacade],
})
export class ForecastModule {}
