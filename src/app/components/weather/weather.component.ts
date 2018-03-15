import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public city: any;
  constructor() { }

  ngOnInit() {
  }

  setCity(event) {
    this.city = event.searchedCity;
  }

}
