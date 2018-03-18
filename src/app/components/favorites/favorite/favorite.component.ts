import { Component, OnInit, Input } from '@angular/core';
import { GetCityService } from '../../../services/get-city.service'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() city;

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
}
