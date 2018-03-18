import { Component, OnInit } from '@angular/core';
import { GetCityService } from '../../services/get-city.service'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favCities = [];

  constructor(private getCityService : GetCityService) { }

  ngOnInit() {
    this.getCityService.getFav().subscribe((res) => {
      this.favCities = res.favorites;
    },(error) => {
      alert("Please try again.");
    }); 
  }

}
