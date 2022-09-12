import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { of } from 'rxjs';
import { SharedUiModule } from '../shared/ui/shared-ui.module';
import { ForecastFacade } from './+state/forecast.facade';
import { mockAdaptedForecastTableDef } from './+state/services/mocks/mock-adapted-forecast-table-def';
import { ForecastHeaderCellComponent } from './forecast-table/forecast-header-cell/forecast-header-cell.component';
import { ForecastIconRowComponent } from './forecast-table/forecast-icon-row/forecast-icon-row.component';
import { ForecastRowComponent } from './forecast-table/forecast-row/forecast-row.component';
import { ForecastTableComponent } from './forecast-table/forecast-table.component';

import { ForecastComponent } from './forecast.component';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;
  const mockForecastFacade = {
    forecastTableViewModel$: of({
      city: 'London',
      forecast: mockAdaptedForecastTableDef,
      message: null,
    }),
    init: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ForecastComponent,
        ForecastTableComponent,
        ForecastHeaderCellComponent,
        ForecastRowComponent,
        ForecastIconRowComponent,
      ],
      providers: [{ provide: ForecastFacade, useValue: mockForecastFacade }],
      imports: [SharedUiModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hydrate child templates', fakeAsync(() => {
    const cityPicker =
      fixture.debugElement.nativeElement.querySelector('#city-select');
    expect(cityPicker).toBeTruthy();

    const tableTitle = fixture.debugElement.nativeElement.querySelector('h2');
    expect(tableTitle.innerText).toBe('Five day forecast for London');

    const lastTempCell = fixture.debugElement.nativeElement.querySelector(
      'tbody tr td:nth-child(6)'
    );
    expect(lastTempCell.innerText).toBe('17.26');
  }));
});
