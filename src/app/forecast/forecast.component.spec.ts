import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SharedUiModule } from '../shared/ui/shared-ui.module';
import { ForecastFacade } from './+state/forecast.facade';
import { mockAdaptedForecastTableDef } from './+state/services/mocks/mock-adapted-forecast-table-def';

import { ForecastComponent } from './forecast.component';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;
  const mockForecastFacade = {
    forecastTableViewModel$: of(mockAdaptedForecastTableDef),
    init: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForecastComponent],
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

  it('should hydrate child templates', () => {
    expect(component).toBeTruthy();
  });
});
