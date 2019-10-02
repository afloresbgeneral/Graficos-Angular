import { RouterModule, Routes } from '@angular/router';

import { BarComponent } from './components/bar/bar.component';
import { DonutComponent } from './components/donut/donut.component';
import { LinesComponent } from './components/lines/lines.component';
import { NgModule } from '@angular/core';
import { RadarComponent } from './components/radar/radar.component';

const routes: Routes = [
  {path: 'lines', component: LinesComponent},
  {path: 'bar', component: BarComponent},
  {path: 'donut', component: DonutComponent},
  {path: 'radar', component: RadarComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'lines'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
