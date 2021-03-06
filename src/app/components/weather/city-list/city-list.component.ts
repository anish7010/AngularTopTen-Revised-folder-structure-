import { Component, OnInit, Input } from '@angular/core';
import { GetCityService } from '../../../services/get-city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  @Input() city : any;
  favList;
  constructor(private getCityService : GetCityService) { }

  ngOnInit() {
  }

  addFav(city : string) {
    this.getCityService.getFav().subscribe((res)=>{
      this.favList = res.favorites;
      if(this.favList.length >= 10) {
        alert("You have already added 10 cities, Please remove some of them first.")
        return;
      }
      else {
        this.getCityService.addFav(city).subscribe((res) =>{
          alert("City successfully added.")
        }, (error) =>{
        alert("This city could not be added, please try again.")
      })

      }
    },(error)=>{
        alert("Please try again");
         })
    
}

}