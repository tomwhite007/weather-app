import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveDayForecastTableComponent } from './five-day-forecast-table.component';

describe('FiveDayForecastTableComponent', () => {
  let component: FiveDayForecastTableComponent;
  let fixture: ComponentFixture<FiveDayForecastTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveDayForecastTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveDayForecastTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
