import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  @Input() city : any;
  constructor() { }

  ngOnInit() {
  }
  
}
