import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazySvgSpriteSheetComponent } from './lazy-svg-sprite-sheet.component';

describe('LazySvgSpriteSheetComponent', () => {
  let component: LazySvgSpriteSheetComponent;
  let fixture: ComponentFixture<LazySvgSpriteSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazySvgSpriteSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazySvgSpriteSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
