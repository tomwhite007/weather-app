import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastTableHeaderCellComponent } from './forecast-table-header-cell.component';

describe('ForecastTableHeaderCellComponent', () => {
  let component: ForecastTableHeaderCellComponent;
  let fixture: ComponentFixture<ForecastTableHeaderCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastTableHeaderCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastTableHeaderCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
