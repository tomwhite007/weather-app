import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastIconRowComponent } from './forecast-icon-row.component';

describe('ForecastIconRowComponent', () => {
  let component: ForecastIconRowComponent;
  let fixture: ComponentFixture<ForecastIconRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastIconRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastIconRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
