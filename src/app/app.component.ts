import {
  AfterViewInit,
  Component,
  OnInit,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'Weather App';

  constructor(private vcr: ViewContainerRef) {}

  ngAfterViewInit(): void {
    setTimeout(async () => {
      const { LazySvgSpriteSheetComponent } = await import(
        './core/lazy-svg-sprite-sheet/lazy-svg-sprite-sheet.component'
      );
      this.vcr.createComponent(LazySvgSpriteSheetComponent);
    });
  }
}
