import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastHeaderCellComponent } from './forecast-header-cell.component';

describe('ForecastHeaderCellComponent', () => {
  let component: ForecastHeaderCellComponent;
  let fixture: ComponentFixture<ForecastHeaderCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastHeaderCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastHeaderCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
