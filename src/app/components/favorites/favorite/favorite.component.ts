import { Component, OnInit, Input } from '@angular/core';
import { GetCityService } from '../../../services/get-city.service'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() city;
  newCity : string;
  newCityObject : any;
  constructor(private getCityService : GetCityService) { 
  }

  ngOnInit() {
  }

  remove(city) {
    return this.getCityService.remove(this.city).subscribe((res) =>{
      alert("Successfully Deleted");
      },(err)=>{
        console.log(err);
  })
  }

  
  update() {
    this.newCity = prompt("Please enter the new city");
    this.getCityService.getWeather(this.newCity).subscribe((res)=>{
      this.newCityObject = res;
     return this.getCityService.update(this.city, this.newCityObject).subscribe(res=>{
       alert("City successfully updated");
     },(error)=>{
       alert("City could not be updated");
     });

    },(error)=>{
      alert("Please enter a valid city");
    });    
  }

}
