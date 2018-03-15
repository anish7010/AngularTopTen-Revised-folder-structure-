import { Component, OnInit } from '@angular/core';
import { GetCityService } from '../../../services/get-city.service'

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {

  city : string;
  searchedCity : any;


  constructor(private getCityService : GetCityService) { }

  ngOnInit() {
  }

  getCity(city : string){
    this.getCityService.getWeather(city).subscribe((res) =>
  this.searchedCity = res);
  }

}
