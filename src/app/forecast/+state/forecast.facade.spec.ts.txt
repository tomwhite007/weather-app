import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { firstValueFrom, Observable } from 'rxjs';

import * as ForecastActions from './forecast.actions';
import { ForecastEffects } from './forecast.effects';
import { ForecastFacade } from './forecast.facade';
import { ForecastElement } from './forecast.models';
import {
  FORECAST_FEATURE_KEY,
  ForecastState,
  initialForecastState,
  forecastReducer,
} from './forecast.reducer';
import * as ForecastSelectors from './forecast.selectors';

interface TestSchema {
  forecast: ForecastState;
}

const readFirst = (stream$: Observable<any>) => firstValueFrom(stream$);

describe('ForecastFacade', () => {
  let facade: ForecastFacade;
  let store: Store<TestSchema>;

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(FORECAST_FEATURE_KEY, forecastReducer),
          EffectsModule.forFeature([ForecastEffects]),
        ],
        providers: [ForecastFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(ForecastFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.forecast$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.forecast$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadForecastSuccess` to manually update list
     */
    it('allForecast$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.forecast$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(ForecastActions.loadForecastSuccess({}));

      list = await readFirst(facade.forecast$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
