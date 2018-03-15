import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CitySearchComponent } from './components/weather/city-search/city-search.component';
import { CityListComponent } from './components/weather/city-list/city-list.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
//importing service
import { GetCityService } from './services/get-city.service';
import { AppRoutingModule } from './/app-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CitySearchComponent,
    CityListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    GetCityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
