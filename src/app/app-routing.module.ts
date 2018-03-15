import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';

const routes : Routes = [
  { path : 'search', component : WeatherComponent },
  { path : '', redirectTo : '/search', pathMatch : 'full'}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ 
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
