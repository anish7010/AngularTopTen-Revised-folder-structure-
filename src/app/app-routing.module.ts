import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitySearchComponent } from './components/weather/city-search/city-search.component';

const routes : Routes = [
  { path : 'search', component : CitySearchComponent },
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
