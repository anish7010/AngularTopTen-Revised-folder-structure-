import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const routes : Routes = [
  { path : 'search', component : WeatherComponent },
  { path : '', redirectTo : '/search', pathMatch : 'full'},
  { path : 'favorites', component : FavoritesComponent },
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
