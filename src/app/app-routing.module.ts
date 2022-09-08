import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'forecast', pathMatch: 'full' },
  {
    path: 'forecast',
    loadChildren: () =>
      import('./forecast/forecast.module').then((m) => m.ForecastModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
